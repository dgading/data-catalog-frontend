import React from 'react';
import PropTypes from 'prop-types';

import LI from './LI';
import H3 from './H3';
import ShowMore from './ShowMore';

import FacetBlockDiv from './FacetBlockDiv';

function prepareLink(term, selectedFacets, facetKey, name, sort, active = false) {
  let lData = {};
  if (term) {
    lData.q = term;
  }
  if (sort) {
    lData.sort = sort;
  }
  lData[facetKey] = name;
  // If the link is active remove so the link will "reset" the search.
  if (active) {
    selectedFacets = selectedFacets.filter((f) => {
      if (f.includes(name)) {
        delete lData[facetKey];
        return false;
      }
      return true;
    });
  }
  const facetData = selectedFacets.reduce((o, val) => {
    return { [val[0]] : val[1] };
  }, {});
  lData = Object.assign(lData, facetData);
  let link = Object.keys(lData).map(key => key + '=' + lData[key]).join('&');
  return '?' + link;
}

function FacetBlocks({ term, sort, title, items, totalFacets, facetKey, selectedFacets, url, facetCallback, showAllToggle, Link, isOpen}) {
  let content = (<ul></ul>);
  let toggleButton = null;

  // Removes other items in the active category. TODO: move to HOC.
  let filtered = items.filter((item, facetCategory) => {
    let flagged = false;
    const facetName = item[0];
    selectedFacets.forEach((facet) => {
      const selectedFacetCategory = facet[0];
      const selectedFacetName = facet[1];
      if (facetName !== selectedFacetName && selectedFacetCategory === facetKey) {
        flagged = true;
      }
    });
    return !flagged;
  });

  content = filtered.map(function callback(facet, i) {
    const name = facet[0];
    var value = "(" + facet[1] + ")";
    let active = "";
    selectedFacets.forEach((facet) => {
      if (facetKey === facet[0] && name === facet[1]) {
        active = "active";
        value = ""
      }
    });

    let link = url + prepareLink(term, selectedFacets, facetKey, name, sort, active);
    return <LI key={`facet-${i}`}><Link onClick={facetCallback} data-facet-value={name} data-facet-active={active ? true : false} data-facet-type={facetKey} className={active} to={link}>{name} {value}</Link></LI>
  });

  if (filtered.length >= 10) {
    if (!isOpen) {
      toggleButton = <ShowMore className={`facet-block-showmore`} onClick={showAllToggle}>Show {totalFacets - items.length} more</ShowMore>
    } else {
      toggleButton = <ShowMore className={`facet-block-showmore`} onClick={showAllToggle}>Show Less</ShowMore>
    }
  }

  return (
    <FacetBlockDiv id={`facet-block-${facetKey}`}>
      <H3>{title}</H3>
      <div className={`facet-block-${facetKey}-inner`}>
        <ul className="list-group">{content}</ul>
        {toggleButton}
      </div>
    </FacetBlockDiv>);
}


function FacetList({ term, sort, facets, selectedFacets, facetsResults, facetCallback, toggleAllCallback, url, Link }) {

  let content = (<div></div>);

  if (facets !== false) {
    
    let items = [];
    for (let facet in facets) {
      items.push(facet);
    }
    content = items.map((item) => {
      let visibleFacets = facetsResults[item];
      let showAllButton = () => toggleAllCallback(facets[item]);
      if (!facets[item].showAll && visibleFacets.length > 10) {
        visibleFacets = visibleFacets.slice(0, 10);
      } 

      const facetListProps = {
        title: facets[item].label,
        items: visibleFacets,
        totalFacets: facetsResults[item].length,
        selectedFacets,
        facetKey: item,
        term,
        sort,
        url,
        isOpen: facets[item].showAll,
        facetCallback,
        showAllToggle: showAllButton,
        Link
      }
      return <FacetBlocks key={item} {... facetListProps} />
    });

    return <div key="facets">{content}</div>;
  }

  return null;
}

FacetBlocks.propTypes = {
  facetCallback: PropTypes.func,
  facetKey: PropTypes.string,
  isOpen: PropTypes.bool,
  items: PropTypes.array,
  Link: PropTypes.func,
  selectedFacets: PropTypes.array,
  showAllToggle: PropTypes.func,
  sort: PropTypes.string,
  term: PropTypes.string,
  title: PropTypes.string,
  totalFacets: PropTypes.number,
  url: PropTypes.string,
};

FacetList.propTypes = {
  facetCallback: PropTypes.func,
  facetResults: PropTypes.any,
  facets: PropTypes.object,
  Link: PropTypes.func,
  query: PropTypes.string,
  selectedFacets: PropTypes.any,
  sort: PropTypes.string,
  term: PropTypes.string,
  toggleAllCallback: PropTypes.func,
  url: PropTypes.string,
};

export default FacetList;

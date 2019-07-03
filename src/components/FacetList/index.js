import React from 'react';
import PropTypes from 'prop-types';

import FacetBlocks from './FacetBlocks';

function FacetList({ term, sort, facets, selectedFacets, facetsResults, facetCallback, toggleAllCallback, url, Link }) {

  let content = (<div></div>);

  if (facets !== false) {

    let items = [];
    for (let facet in facets) {
      items.push(facet);
    }
    content = items.map((item) => {
      let visibleFacets = facetsResults[item] instanceof Array ? facetsResults[item] : [];
      let showAllButton = () => toggleAllCallback(facets[item]);
      if (!facets[item].showAll && visibleFacets.length > 10) {
        visibleFacets = visibleFacets.slice(0, 10);
      }

      const totalFacets = facetsResults[item] instanceof Array ? facetsResults[item].length : 0;
      const title = facets[item] instanceof Array ? facets[item].label : "";
      const facetListProps = {
        title,
        items: visibleFacets,
        totalFacets,
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

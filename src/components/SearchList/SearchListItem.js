import React from 'react';
import PropTypes from 'prop-types';
import ItemWrapper from './ItemWrapper';
import FAPIcon from '../../components/FontAwesomePro'
import excerpts from 'excerpts';

const SearchListItem = ({
  title,
  modifiedDate,
  downloadTitle,
  downloadURL, 
  description,
  descriptionLength,
  theme,
  url
}) => {
  var options = { year: 'numeric', month: 'short', day: 'numeric' };
  let dateString;
  if(modifiedDate) {
    dateString= new Date(modifiedDate).toLocaleDateString("en-US", options)
  }
  const excerptLength = descriptionLength ? descriptionLength : 35;
  const trimmedDescription = excerpts(description, {words: excerptLength});
  let themes;
  if(theme) {
    themes = (
      <ul className="theme-list item-theme">
        {theme.map((topic, index) => (
          <li key={`dist-${topic.identifier}-${index}`}>
            {topic.title}
          </li>
        ))}
      </ul>
    );
  }
  

  return(
    <ItemWrapper className="search-list-item">
      {themes}
      <h2><a href={url}>{title}</a></h2>
      <p className="item-description">{trimmedDescription}</p>
      <div className="dataset-file">
        {`Last updated on ${dateString}`}
        {` `}
        <span className="bullet-point">&bull;</span>
        {` `}
        <a href={downloadURL}>
          <FAPIcon icon="arrow-to-bottom"/>
          {downloadTitle}
        </a>
      </div>
    </ItemWrapper>
  );
}

SearchListItem.propTypes = {
  
};

export default SearchListItem;
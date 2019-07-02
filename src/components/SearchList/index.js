import React from 'react';
import PropTypes from 'prop-types';
import SearchListItem from './SearchListItem';
import Wrapper from './Wrapper';

const SearchList = ({items, message, downloadTitle}) => {
  return(
    <Wrapper className="search-list">
      <div className="results-message">{ message }</div>
      <ol>
        {items.map((item, index) => {
          let downloadURL = null;
          if (item.format && item.format instanceof Array && item.format[0] instanceof Array && item.format[0].indexOf('downloadURL') > -1) {
            downloadURL = item.format[0].downloadURL;
          }
          return(
            <SearchListItem
              key={index}
              title={item.title}
              url={item.ref}
              theme={item.theme}
              description={item.description}
              modifiedDate={item.modified}
              downloadTitle={downloadTitle}
              downloadURL={downloadURL}
            />
          );
        })}
      </ol>
    </Wrapper>
  );
}

SearchList.propTypes = {
  items: PropTypes.array,
  message: PropTypes.string,
  downloadTitle: PropTypes.string
};

export default SearchList;

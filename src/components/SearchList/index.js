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
          return(
            <SearchListItem
              title={item.title}
              url={item.ref}
              theme={item.theme}
              description={item.description}
              modifiedDate={item.modified}
              downloadTitle={downloadTitle}
              downloadURL={item.format ? item.format[0].downloadURL : null}
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
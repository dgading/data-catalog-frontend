import styled from 'styled-components';

const SearchWrapper = styled.div`

  .search-sidebar-options {
    border: 1px solid ${props => props.theme.grayLight};
    padding: 30px;
    margin-bottom: 25px;
    -webkit-box-shadow: 1px 1px 7px 0px rgba(204,204,204,.8);
    -moz-box-shadow: 1px 1px 7px 0px rgba(204,204,204,.8);
    box-shadow: 1px 1px 7px 0px rgba(204,204,204,.8);
  }

  .search-sidebar-label {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .pagination {
    li a,
    li span {
      border: 1px solid ${props => props.theme.grayLight};
    }

    li.active > a,
    li.active > a:focus {
      background-color: ${props => props.theme.highlight};
      border-color: ${props => props.theme.grayLight};
    }
  }

  

  .results-list,
  .search-sidebar {
    padding-top: 20px !important;
  }
`;

export default SearchWrapper;

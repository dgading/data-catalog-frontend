import styled from 'styled-components';

const FacetBlock = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.grayLight};
  &:first-of-type {
    padding: 0 0 20px 0;
    border-top: none;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  .list-group {
    .ds-c-choice:checked + label::before {
      background-color: ${props => props.theme.highlight};
      border-color: ${props => props.theme.highlight};
    }
  }

`;

export default FacetBlock;

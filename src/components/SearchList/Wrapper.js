import styled from 'styled-components';

const Wrapper = styled.div`
  .results-message {
    padding: 15px 0;
    border-bottom: 1px solid ${props => props.theme.grayLight};
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  
`;

export default Wrapper;

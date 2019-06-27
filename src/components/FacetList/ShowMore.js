import styled from 'styled-components';

const ShowMore = styled.button`
  background: #FFFFFF;
  padding: 0;
  list-style-type: none;
  margin-bottom: 9px;
  line-height: 22px;
  width: 100%;
  position: relative;
  display: block;
  color: ${props => props.theme.primaryDark};
  border: none;
`;

export default ShowMore;


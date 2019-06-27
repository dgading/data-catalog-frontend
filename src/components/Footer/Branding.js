import styled from "styled-components";

const Branding = styled.div`
  max-width: 60%;
  img {
    padding-right: 33px;
    vertical-align: baseline;
  }
  p {
    margin: 15px 0;
    clear: both;
  }
  .footer-image-container {
    margin-bottom: 30px;
  }
  .social-icon-container {
    margin-top: 30px;
    a {
      height: 45px;
      display: inline-block;
      margin-right: 12px;
      &:hover {
        border-bottom: 1px dotted #323A45;
      }
    }
  }

  @media screen and (max-width: 992px) {
    max-width: 100%; 
  }
`;

export default Branding;

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.footerBackgroundColor};
  color: ${props => props.theme.footerText};
  font-size: 12px;

  nav {
    li {
      padding: 5px 0;
      a {
        color: ${props => props.theme.footerLink};
        font-size: 1.2rem;
        line-height: 2.4rem;
        padding: 0;
        display: inline;
        text-decoration: none;
        border-left: none;
        border-bottom: 2px solid transparent;
        &:hover,
        &:focus {
          color: ${props => props.theme.footerLinkHover};
          border-bottom: 2px solid #323A45;
          background-color: transparent;
        }
      }
    }
  }
  .footer-left-nav {
    width: 100%;
  }
  .footer-bottom-nav {
    li {
      margin: 0;
      a {
        margin-right: 18px;
      }
    }
  }
  .left-foot {
    background-color: #F6F9FD;
    .left-foot-content {
      margin: 0;
      padding: 80px 32px;
      h3 {
        font-family: Muli, "Helvetica Neue", Arial, sans-serif;
        margin-bottom: 20px;
        font-size: 12px;
        font-weight: 700;
        display: block;
      }
    }
  }
  .right-foot {
    background-color: #E8F0FA;
    .right-foot-content {
      padding: 80px 32px;
    }
  }
  .bottom-foot {
    padding: 40px 32px;
    margin: 0;
  }
  
  @media screen and (min-width: 992px) {
    .footer-left-nav {
      display: inline-block;
      width: 40%;
      vertical-align: top;
    }
    .left-foot .left-foot-content {
      margin-left: 33%;
      padding: 80px 0;
    }
    .right-foot-content {
      padding:80px 70px;
    }
    .bottom-foot {
      padding: 40px 32px;
      margin: 0;
      padding 40px 0;
      margin-left: auto;
      margin-right: auto;
      max-width: 1040px;
    }
  }
`;

export default Wrapper;

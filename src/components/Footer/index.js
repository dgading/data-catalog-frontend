import React from 'react';
import Wrapper from './Wrapper';
import Branding from './Branding';
import FAPIcon from '../FontAwesomePro';
import Menu from '../Menu'
import links from '../../assets/menu.json';

class Footer extends React.Component {

  render() {

    return (
      <Wrapper id="footer" className="page-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="left-foot col-lg-7 col-md-12">
              <div className="left-foot-content">
                <Menu className="footer-left-nav" items={links.footer1} title="WEBSITES"  />
                <Menu className="footer-left-nav" items={links.footer2} title="HELPFUL LINKS" />
              </div>
            </div>
            <div className="right-foot col-lg-5 col-md-12">
              <Branding className="right-foot-content">
                <div className="footer-image-container">
                </div>
                <p>
                  Powered by DKAN and Interra.
                </p>
                <div className="social-icon-container">
                  <a href="https://www.facebook.com/pages/">
                    <FAPIcon icon="facebook-circle" height="40" width="40"/>
                  </a>
                  <a href="https://twitter.com/getdkan">
                    <FAPIcon icon="twitter-circle" height="40" width="40"/>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FAPIcon icon="linkedin-circle" height="40" width="40"/>
                  </a>
                </div>
              </Branding>
            </div>
          </div>
        </div>
        <div className="bottom-foot">
          <Menu className="footer-bottom-nav" items={links.footer3} horizontal />
        </div>
      </Wrapper>

    );
  }
}

export default Footer;

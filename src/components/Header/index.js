import React, { Component } from 'react'
import Wrapper from './Wrapper'
import logo from '../../assets/images/logo.svg'
import Menu from '../Menu'
import links from '../../assets/menu.json'
import FAPIcon from '../FontAwesomePro'

class Header extends Component {

  render() {

    return (
      <Wrapper className="container-fluid">
        <div className="branding row">
          <div className="col-lg-7 col-md-12">
            <div className="dkan-link-container">
              <a href="https://getdkan.com" title="getdkan.com">
                <img className="logo" alt="logo" src={logo}/>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <Menu className="header-menu" items={links.header} horizontal />
          </div>
        </div>
      </Wrapper>
    );
  }

}

export default Header;

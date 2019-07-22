/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { Footer } from 'interra-data-catalog-components';
import Header from "../Header";

const Layout = ({ children, path, title }) => {
  return (
    <div className="App">
      <Helmet title={`${title} - DKAN Demo`} defer={false} />
      <Header path={path}/> 
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

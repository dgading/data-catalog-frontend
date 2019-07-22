/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../Header";
import { Footer } from 'interra-data-catalog-components';


const Layout = ({ children, path }) => {
  return (
    <div className="App">
    {/* siteTitle={data.site.siteMetadata.title}  */}
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

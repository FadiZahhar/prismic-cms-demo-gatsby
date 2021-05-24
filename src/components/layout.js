/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import styled from 'styled-components';

const MainWrapper = styled.main`
  max-width:800px;
  margin:0 auto;
`

const Layout = ({ children }) => {


  return (
    <>

        <MainWrapper>{children}</MainWrapper>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

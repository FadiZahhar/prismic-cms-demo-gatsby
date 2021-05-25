/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from 'styled-components';

const MainWrapper = styled.main`
  margin:0 auto;
`
const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          _meta {
            id
          }
          branding
          navigation_links {
            label
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const NavLink = styled.div`
margin: auto 0;

a{
  color:white;
  padding:0 16px;
  text-decoration:none;

  &:hover {
    color: orange;
    font-weight:bold;
    font-size:16px;
  }
}

`;

const Header = styled.header`
display:flex;
background:black;
height:66px;
padding:0 16px;
box-sizing:border-box;
`;

const NavLinks = styled.div`
  margin-left:auto;
  display:flex;
`

const Branding = styled.div`
color: orange;
font-weight: bold;
margin:auto 0;
font-size:20px;
`

const Layout = ({ children }) => {


  return (
    <>
      <Header>

      <StaticQuery
        query={`${navigationQuery}`}
        render={(data) => {
          console.log(data);
          return (
            <>
              <Branding>
                {data.prismic.allNavigations.edges[0].node.branding}
              </Branding>
            <NavLinks>
                {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                  return (
                    <NavLink key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>
                        {link.label}
                      </Link>
                    </NavLink>
                  )
                })}
            </NavLinks>
              </>
          )

            }} />

        </Header>
        <MainWrapper>{children}</MainWrapper>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//style component
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

//import component
import Header from "./header"

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration:none;
  /* cursor : none */
}

html{
  box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  font-size:16px;
}

body{
  font-family: -apple-style, BlinkMacSystemFont, 'Seggoe UI';
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  overscroll-behavior:none;
  overflow: hidden;
}

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

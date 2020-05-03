/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box, Link, Text } from "theme-ui"
import { AiOutlineAmazon } from "react-icons/ai"

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: 860,
          p: 3,
        }}
      >
        <main>{children}</main>
        <Box sx={{ textAlign: "center" }}>
          <Link
            sx={{
              borderRadius: "4px",
              p: "0.5rem 2rem",
              bg: "primary",
              color: "white !important",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                bg: "secondary",
              },
            }}
            href="https://tinyurl.com/hector-the-little-dinosaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineAmazon />
            <Text ml={1}>Buy now on Amazon</Text>
          </Link>
        </Box>
        <Box as="footer" mt={5}>
          © {new Date().getFullYear()},{" "}
          <Link
            href="https://www.instagram.com/aurelie_mercier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Written and illustrated by Aurelie Mercier
          </Link>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

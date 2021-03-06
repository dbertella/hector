/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Header from "./header"
import { Box, Link, Text, Flex, Heading } from "theme-ui"
import amazonButton from "../images/available_at_amazon_en_vertical_rev.png"
import background from "../images/Divider.png"

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
        sx={{
          m: `0 auto`,
          maxWidth: 860,
          px: 3,
        }}
      >
        <main>{children}</main>
        <Heading
          as="h2"
          sx={{
            textAlign: "center",
            background: "50% 50px",
            backgroundImage: `url(${background})`,
            pt: 3,
          }}
        >
          Get the Book
        </Heading>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            sx={{
              borderRadius: "8px",
              bg: "text",
              pt: "10px",
              px: 5,
              height: 64,
              width: 218,
              boxSizing: "border-box",
              m: "16px 16px 24px",
              img: {
                maxWidth: "100%",
              },
            }}
            onClick={() => {
              trackCustomEvent({
                category: "Amazon Button",
                action: "Click",
              })
            }}
            href="https://www.amazon.co.uk/Hector-little-dinosaur-Aurelie-Mercier/dp/B0875XQQ5L/ref=sr_1_1?crid=2G9KT23A1032U&dchild=1&keywords=hector+the+little+dinosaur&qid=1588351717&sprefix=hector+the+litt%2Caps%2C-1&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Get it on Amazon" src={amazonButton} />
          </Link>
          <Link
            sx={{
              width: 250,
              img: {
                maxWidth: "100%",
              },
            }}
            onClick={() => {
              trackCustomEvent({
                category: "Google Button",
                action: "Click",
              })
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=hector.the.little.dinosaur"
          >
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png"
            />
          </Link>
        </Flex>
        <Flex
          as="footer"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          mt={5}
        >
          <Text>
            © {new Date().getFullYear()},{" "}
            <Link
              href="https://www.instagram.com/aurelie_mercier/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aurelie Mercier
            </Link>
          </Text>
          <Text
            sx={{
              color: "light",
              fontSize: 1,
              ml: 1,
            }}
          >
            Google Play and the Google Play logo are trademarks of Google LLC.
          </Text>
        </Flex>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Flex, Heading, Link as ExternalLink, Text } from "theme-ui"
import { AiOutlineShopping } from "react-icons/ai"
import { GoBook } from "react-icons/go"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hector-logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Flex
      sx={{
        variant: "layout.header",
      }}
    >
      <Flex
        as={Link}
        sx={{
          position: "absolute",
          left: [1, 3],
          bottom: "0",
          height: "80px",
          alignItems: "center",
        }}
        to="/"
      >
        <Img fixed={data.file.childImageSharp.fixed} />
        <Heading sx={{ m: 0 }}>HECTOR</Heading>
      </Flex>
      <Flex>
        <Flex
          as={Link}
          activeStyle={{
            cursor: "default",
          }}
          sx={{
            alignItems: "center",
          }}
          to="/en"
        >
          <GoBook />
          <Text ml={1} sx={{ display: ["none", "block"] }}>the story</Text>
        </Flex>
        <ExternalLink
          href="https://tinyurl.com/hector-the-little-dinosaur"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineShopping />
          <Text ml={1} sx={{ display: ["none", null, "block"] }}>
            Buy Now
          </Text>
        </ExternalLink>
      </Flex>
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

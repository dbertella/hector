import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Flex, Heading } from "theme-ui"

const Header = ({ siteTitle }) => {
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
          left: "1.5rem",
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
        <Link
          activeStyle={{
            cursor: "default",
          }}
          to="/en"
        >
          read the story
        </Link>
        <a
          href="https://tinyurl.com/hector-the-little-dinosaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
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

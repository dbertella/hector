import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Flex, Link as ExternalLink, Text } from "theme-ui"
import { AiOutlineShopping } from "react-icons/ai"
import { GoBook } from "react-icons/go"
import background from "../images/Divider.png"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Hector-icon.png" }) {
        childImageSharp {
          fixed(width: 160, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/"

  return (
    <Flex
      sx={{
        variant: "layout.header",
        backgroundImage: `url(${background})`,
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
          "&:hover": {
            span: {
              opacity: 1,
            },
          },
        }}
        to="/"
      >
        <Img fixed={data.logo.childImageSharp.fixed} />
        <Text
          as="span"
          sx={{
            m: 0,
            fontFamily: "heading",
            fontSize: 4,
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {isHomePage ? "Hector" : "Back Home"}
        </Text>
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
          to="/hector"
        >
          <GoBook size={22} />
          <Text ml={1} sx={{ display: ["none", "block"] }}>
            the story
          </Text>
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
          <AiOutlineShopping size={22} />
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

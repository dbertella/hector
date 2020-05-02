import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const H2 = styled.h2`
  margin: 0;
`
const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  background: #2fa043;
  margin-bottom: 3rem;
  padding: 1.5rem;
`

const Links = styled.div`
  display: flex;
  a {
    color: white;
    text-transform: uppercase;
    margin: 0 0.5rem;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`

const WhiteLink = styled(Link)``

const Logo = styled(Link)`
  position: absolute;
  left: 1.5rem;
  bottom: 0;
  height: 80px;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: rgba(255, 255, 255, 0.7);
  }
`

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
    <Wrapper>
      <Logo to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
        <H2>HECTOR</H2>
      </Logo>
      <Links>
        <WhiteLink
          activeStyle={{
            cursor: "default",
          }}
          to="/en"
        >
          read the story
        </WhiteLink>
        <a
          href="https://tinyurl.com/hector-the-little-dinosaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </Links>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

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

const WhiteLink = styled(Link)`
  color: white;
`

const Logo = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 0;
  height: 80px;
  display: flex;
  align-items: center;
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
      <Logo>
        <Img fixed={data.file.childImageSharp.fixed} />
        <H2>HECTOR</H2>
      </Logo>
      <div>
        <WhiteLink
          activeStyle={{
            textDecoration: "none",
            cursor: "default",
          }}
          to="/"
        >
          en
        </WhiteLink>{" "}
        |{" "}
        <WhiteLink
          activeStyle={{
            textDecoration: "none",
            cursor: "default",
          }}
          to="/it"
        >
          it
        </WhiteLink>
      </div>
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

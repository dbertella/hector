import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  margin: 0;
`

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`

const WhiteLink = styled(Link)`
  color: white;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Wrapper
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <H1>{siteTitle}</H1>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

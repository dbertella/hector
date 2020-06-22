import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading, useThemeUI } from "theme-ui"

const Page = props => {
  const theme = useThemeUI()
  return (
    <Box
      sx={{
        textAlign: "center",
        hr: { m: "3rem auto", width: "50%" },
        ...theme.styles,
        a: {
          color: "secondary",
          textDecoration: "none",
        },
        div: {
          background: "rgba(255,255,255,0.7)",
          p: 1,
          borderRadius: 2,
          fontFamily: "'Gloria Hallelujah', cursive",
          "@media screen and (min-width: 40em)": {
            position: "absolute",
            zIndex: 1,
            maxWidth: 500,
            width: "50%",
            left: "50%",
            transform: "translate(-50%, 20px)",
          },
        },
      }}
      {...props}
    />
  )
}

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Heading
        as="h1"
        sx={{
          textAlign: "center",
          mb: 3,
        }}
      >
        {frontmatter.title}
      </Heading>
      <Page dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`

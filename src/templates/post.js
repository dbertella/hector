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
          color: "primary",
          textDecoration: "none",
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
      <SEO title={frontmatter.title} />
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
      }
    }
  }
`

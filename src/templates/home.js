import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, useThemeUI } from "theme-ui"

const Page = props => {
  const { theme } = useThemeUI()
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: 2,
        ...theme.styles,
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

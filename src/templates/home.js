import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading } from "theme-ui"

const Page = props => (
  <Box
    sx={{
      textAlign: "center",
      fontSize: 3,
    }}
    {...props}
  />
)

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <Page dangerouslySetInnerHTML={{ __html: html }} />
      <Box sx={{ textAlign: "center" }} mb={4}>
        {frontmatter.specs.map(spec => (
          <Box key={spec.title} mb={1}>
            <strong>{spec.title}: </strong>
            {spec.text}
          </Box>
        ))}
      </Box>
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
        specs {
          title
          text
        }
      }
    }
  }
`

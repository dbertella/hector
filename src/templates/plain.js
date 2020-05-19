import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading } from "theme-ui"

const Page = props => (
  <Box
    sx={{
      fontSize: 2,
      hr: { m: "3rem auto", width: "50%" },
      a: {
        color: "primary",
        textDecoration: "none",
      },
    }}
    {...props}
  />
)

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
          fontSize: [3, null, 4],
          color: "secondary",
          mb: 3,
        }}
      >
        {frontmatter.title}
      </Heading>
      <Page dangerouslySetInnerHTML={{ __html: html }} />
      <Box sx={{ mt: 300, textAlign: "center" }}>
        <h3>Hector the little dinosaur</h3>
        <p>A book writtend and illustrated by Aurelie Mercier</p>
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

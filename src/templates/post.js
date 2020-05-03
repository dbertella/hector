import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading, Link } from "theme-ui"

const Page = props => (
  <Box
    sx={{
      textAlign: "center",
      fontSize: "24px",
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "400",
      lineHeight: "32px",
      hr: { margin: "3rem 0" },
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
      <SEO title="Home" />
      <Heading
        as="h1"
        sx={{
          textAlign: "center",
          fontSize: 5,
          color: "secondary",
          mt: 5,
          mb: 3,
        }}
      >
        {frontmatter.title}
      </Heading>
      <Page dangerouslySetInnerHTML={{ __html: html }} />
      <Page>
        <Link
          sx={{
            borderRadius: "4px",
            p: "0.5rem 2rem",
            bg: "primary",
            color: "white !important",
            textAlign: "center",
            "&:hover": {
              bg: "secondary",
            },
          }}
          href="https://tinyurl.com/hector-the-little-dinosaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy now on Amazon
        </Link>
      </Page>
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

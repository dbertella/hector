import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 32px;
  hr {
    margin: 3rem 0;
  }
`

const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #185122;
`
const Cta = styled.a`
  border-radius: 4px;
  padding: 0.5rem 2rem;
  background: rgba(47, 160, 67, 0.8);
  color: white;
  text-align: center;
`
export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <H1>{frontmatter.title}</H1>
      <Page dangerouslySetInnerHTML={{ __html: html }} />
      <Page>
        <Cta
          href="https://tinyurl.com/hector-the-little-dinosaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy now on Amazon
        </Cta>
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

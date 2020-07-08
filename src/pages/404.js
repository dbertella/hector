/** @jsx jsx */
import { jsx, Heading, Flex, Text } from "theme-ui"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      notFoundImg: file(relativePath: { eq: "Hector-icon.png" }) {
        childImageSharp {
          fixed(width: 160, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Heading as="h1">
        Ups something is not quite right{" "}
        <span role="img" aria-label="looking for something">
          👀
        </span>
      </Heading>

      <Flex
        sx={{
          minHeight: 300,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img fixed={data.notFoundImg.childImageSharp.fixed} />
        <Text>
          Something is off here, do you want to go back to the
          <Link to="/" sx={{ ml: 1, variant: "links.pageLink" }}>
            home page
          </Link>
          ?
        </Text>
      </Flex>
    </Layout>
  )
}

export default NotFound

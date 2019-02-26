import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Category = () => (
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <Layout>
      <SEO title="Category" />
      <h1>Hi from the category page</h1>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )}
  />
)

export default Category

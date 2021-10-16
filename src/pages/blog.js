import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import SubscribeForm from "../components/subscribe"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <section className="blog" id="top">
      <div className="container">
        <div className="title">
          <h1>Blog | My digital garden</h1>
          <h4 key={data.allMdx.totalCount}>{data.allMdx.totalCount} Posts</h4>
        </div>
        <div>
          {data.allMdx.nodes.map(({ frontmatter, fields, id }) => (
            <>
              <Link to={fields.slug} key={fields.slug}>
                <div className="card">
                  <div className="card-body">
                    <div className="col-8" key={id}>
                      {frontmatter.title}
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <SubscribeForm />
      </div>
    </section>
  </Layout>
)

export const BlogList = graphql`
  query blogListQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        fields {
          slug
        }
        id
        excerpt
        frontmatter {
          title
          date(formatString: "YYYY")
        }
      }
      totalCount
    }
  }
`

export const Slider = () => {
  const [position, setPosition] = React.useState("1")
  let text = null
  if (position === "0") {
    text = "👈"
  } else if (position === "1") {
    text = "👍"
  } else if (position === "2") {
    text = "👉"
  }
  return (
    <div>
      <h4>{text}</h4>{" "}
      <input
        type="range"
        step="1"
        max="2"
        min="0"
        value={position}
        onChange={e => setPosition(e.target.value)}
      />
    </div>
  )
}
export default BlogPage

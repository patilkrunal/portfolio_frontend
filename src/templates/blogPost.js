import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import SubscribeForm from "../components/subscribe"
import ShareButtons from "../components/sharebuttons"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Img from "gatsby-image"

const BlogPost = ({ data, pageContext }) => (
  <Layout>
    {/* {const { frontmatter, body } = data.mdx} */}
    <SEO
      description={data.mdx.frontmatter.description}
      title={data.mdx.frontmatter.title}
    />
    <section className="blogpost" id="top">
      <div className="container">
        <div className="mx-8">
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <h1>{data.mdx.frontmatter.title}</h1>
            </div>
            <div className="col-auto tagline">
              <span role="img" aria-label="Pencil emoji" className="mx-1">
                ✏️️
              </span>
              {data.mdx.frontmatter.author}
            </div>
            <div className="col-auto tagline">
              <span role="img" aria-label="Calendar emoji" className="mx-1">
                📅
              </span>
              {data.mdx.frontmatter.date}
            </div>
            <div className="col-auto tagline">
              <span role="img" aria-label="Eyes emoji" className="mx-1">
                👀
              </span>
              {data.mdx.timeToRead} mins
            </div>
          </div>

          <ShareButtons
            title={data.mdx.frontmatter.title}
            url={data.site.siteMetadata.url + "/blog/" + data.mdx.slug}
            twitterHandle={data.site.siteMetadata.title}
          />
          <Img
            className="featured-image"
            fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <div className="content">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              {pageContext.previous === false ? null : (
                <>
                  {pageContext.previous && (
                    <Link
                      to={pageContext.previous.fields.slug}
                      className="link"
                      key={pageContext.previous.fields.slug}
                    >
                      <span
                        role="img"
                        aria-label="Left pointing emoji"
                        className="mr-1"
                      >
                        👈
                      </span>
                      Previous
                    </Link>
                  )}
                </>
              )}
            </div>
            <div className="col-6 text-right">
              {pageContext.next === false ? null : (
                <>
                  {pageContext.next && (
                    <Link
                      to={pageContext.next.fields.slug}
                      className="link"
                      key={pageContext.next.fields.slug}
                    >
                      {" "}
                      <span
                        role="img"
                        aria-label="Right pointing emoji"
                        className="mr-1"
                      >
                        👉
                      </span>
                      Next
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      slug
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        author
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 20000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        url
        title
      }
    }
  }
`

export default BlogPost

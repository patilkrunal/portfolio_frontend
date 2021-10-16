import React from "react"

import Layout from "../components/layout"
import Hero from "../components/landing/hero"

import SEO from "../components/seo"
import Content from "../components/landing/content"
import ContactForm from "../components/contactform"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Content />
    <ContactForm />
  </Layout>
)

export default IndexPage

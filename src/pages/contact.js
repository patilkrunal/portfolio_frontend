import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import ContactForm from "../components/contactform"

import Links from "../components/links"
import contactimg from "../images/contactimg.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact" id="top">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Contact Details</h1>
            <p>
              Hi! How are you? Thank you for visiting my site. If you have any
              inquiries or feedback, please don't hesitate to reach out. I am
              available at the following social media outlets:
            </p>
            <Links />

            <a
              href="https://bit.ly/krunal-cv"
              target="_blank"
              rel="noreferrer"
              className="main-button btn btn-primary shadow-sm mt-2"
            >
              Download my resume
            </a>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="Vector of a man and a phone" />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  </Layout>
)

export default ContactPage

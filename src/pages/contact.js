import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Links from "../components/links"
import contactimg from "../images/contactimg.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
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
            <p>
              I am currently available for freelance work. My scope of work
              includes but not limited to:
            </p>
            <ul>
              <li>Website Development</li>
              <li>Programming</li>
              <li>Graphic Design</li>
              <li>Social Activism</li>
              <li>Any kind of help</li>
            </ul>

            <a
              href="https://drive.google.com/file/d/1uc-0noL9qvdZ9di_X3kLlY27fHDFUeJT/view?usp=sharing"
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
    </section>
  </Layout>
)

export default ContactPage

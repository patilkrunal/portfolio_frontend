import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>My mini autobiography~</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    Hi there!
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h2>
                  <h3>an introduction</h3>
                </div>

                <div className="card-text">
                  I am a software developer enthusiast constantly trying to improve
                  myself and contributing a little to make this world a better
                  place to live. You might have got basic understanding about me
                  from this portfolio website. What you've seen is the complete me.
                  What I'm on website is am in real life too. Feel free to get in 
                  touch. I'll be happy to know about you. Cheers!
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="about.jpg"
              alt="About page"
              className="about-img-wrapper"
            />
          </div>
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>More about me</h2>
                  <h3>sweet and sweeter</h3>
                </div>

                <div className="card-text">
                  Bonbon chocolate bar ice cream brownie ice cream macaroon
                  halvah. Toffee tart chupa chups ice cream croissant jujubes
                  lollipop. Dragée jelly beans sesame snaps wafer muffin sesame
                  snaps topping bonbon ice cream. Macaroon cake biscuit gummies
                  sweet sweet chocolate cake. Danish sweet roll carrot cake
                  croissant. Donut chocolate cake jelly beans.
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage

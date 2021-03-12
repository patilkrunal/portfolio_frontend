import React from "react"

import Image from "../image"
import Links from "../links"

import { Link } from "react-scroll"

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-6 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>Hi. I'm Krunal</h1>
              <p>
                I am a Computer Engineer at Army Institute of Technology, Pune. 
                Let me know how you like my portfolio?
              </p>
              <Link
                to="content"
                className="main-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Get to know me
              </Link>
              <a
                href="https://drive.google.com/file/d/1uc-0noL9qvdZ9di_X3kLlY27fHDFUeJT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="main-button btn btn-primary shadow-sm ml-3"
              >
                Download my resume
              </a>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="photo.jpg"
                      style={{ width: "5rem", height: "5rem" }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">@patilkrunal</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                      alt="pin emoji"
                    >
                      📍
                    </span>
                    Nashik
                    <br />
                  </h4>
                  <p className="card-text">
                    Backend enthusiast,
                    <br />
                    Compassionate
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  )
}

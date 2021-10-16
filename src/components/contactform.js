import React, { Component } from "react"

import contactimg from "../images/contact.svg"

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state

    return (
      <section className="contactform">
        <div className="container">
          <h2>
            <span className="ring mr-1" role="img" aria-label="Phone">
              📱
            </span>
            Got any ideas?
          </h2>
          {/* <p className="text-muted">Let's talk!</p> */}

          <div className="row">
            <div className="col-md-8 my-auto">
              <form
                onSubmit={this.submitForm}
                action={`https://formspree.io/${process.env.FORMSPREE_API_KEY}`} 
                // "https://formspree.io/" // {"https://formspree.io/" + data.site.siteApiKeys.formSpree}
                method="POST"
                id="contactId"
              >
                <div className="form-group mt-4">
                  <label htmlFor="contactEmail">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="contactEmail"
                    aria-describedby="emailHelp"
                    placeholder="Please enter a valid email address."
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="contactMessage">Message</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactMessage"
                    placeholder="Any awesome project ideas?"
                  />
                </div> */}
                <div className="form-group">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea
                    className="form-control"
                    form="contactId"
                    name="message"
                    id="contactMessage"
                    placeholder="Any fun project ideas?"
                  ></textarea>
                </div>

                {status === "SUCCESS" ? (
                  <div className="alert alert-success" role="alert">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                ) : (
                  <button className="btn btn-xl shadow-sm"> Let's talk!</button>
                )}
                {status === "ERROR" && (
                  <div className="alert alert-danger mt-2" role="alert">
                    Uh oh! There was an error. Please refresh and we'll try
                    again.
                  </div>
                )}
              </form>
            </div>

            <div className="col-lg-4 my-auto">
              <div className="img-container">
                <img src={contactimg} alt="Vector of a man and a phone" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}

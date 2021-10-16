import React, { Component } from "react"

export default class SubscribeForm extends Component {
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
      <section className="subscribeform">
        <div className="container">
          <div className="row justify-content-center">
            {" "}
            <div className="col-lg-6 col-md-6 col-s-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2>Tech content to your inbox</h2>
                  <p>
                    Thank you for reading! Join my mailing list to be the first
                    to read about my thoughts on the web.
                  </p>
                  <form
                    onSubmit={this.submitForm}
                    action={`https://formspree.io/${process.env.FORMSPREE_API_KEY_SUBSCRIBE}`} // "https://formspree.io/" // {"https://formspree.io/" + data.site.siteApiKeys.formSpree}
                    method="POST"
                    id="contactId"
                  >
                    <div className="form-group mt-4">
                      {/* <label htmlFor="subscribeName">Your first name</label> */}
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        id="subscribeName"
                        aria-describedby="emailHelp"
                        placeholder="Your first name"
                        required
                      />
                    </div>

                    <div className="form-group mt-2">
                      {/* <label htmlFor="subscribeEmail">Email address</label> */}
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="subscribeEmail"
                        aria-describedby="emailHelp"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    {status === "SUCCESS" ? (
                      <div className="alert alert-success" role="alert">
                        Thank you for your message! I'll get back to you soon.
                      </div>
                    ) : (
                      <button className="btn btn-xl shadow-sm">
                        Subscribe
                      </button>
                    )}
                    {status === "ERROR" && (
                      <div className="alert alert-danger mt-2" role="alert">
                        Uh oh! There was an error. Please refresh and we'll try
                        again.
                      </div>
                    )}
                  </form>
                  <p className="disclaimer">
                    Strictly no spam. Unsubscribe anytime.
                  </p>
                </div>

                {/* <div className="col-lg-4 ">
                  <div className="img-container">
                    <img src={contactimg} />
                  </div>
                </div> */}
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

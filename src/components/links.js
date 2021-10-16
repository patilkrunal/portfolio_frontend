import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Links() {
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">
        <a
          href="mailto:patilkrunal11.kp@gmail.com"
          target="_blank"
          rel="noreferrer"
          alt="Email link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://github.com/patilkrunal"
          target="_blank"
          rel="noreferrer"
          alt="Github link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://linkedin.com/in/patilkrunal"
          target="_blank"
          rel="noreferrer"
          alt="LinkedIn link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://twitter.com/_patilkrunal/"
          target="_blank"
          rel="noreferrer"
          alt="Twitter link"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      {/* <li>
        <a href="https://twitter.com/_patilkrunal"
          className="follow-button btn btn-primary shadow-lg"
          target="_blank"
        >
          Follow
        </a>
      </li>*/}
    </ul>
  )
}

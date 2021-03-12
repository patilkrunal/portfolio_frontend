import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* + Education subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>What do I{" "}
                    <span className="word">Study</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Army Institute of Technology</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Computer Engineer
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Jun 2018 - May 2022
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ Pursuing Bachelor of Engineering from Pune University.
                        Have been engaged with various clubs/cells of the college
                        and is in constant search of expanding my knowledge.
                        <br />◆ Have been associated with E-Cell of the college 
                        from start of my college journey. 
                      </div>
                    </div>
                  </div>
                </div>
                {/* - Education subsection */}

                {/* + Technologies subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What do I{" "}
                    <span className="word">know</span>?
                  </h2>
                  <div className="row">
                    {data.allLanguagesJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card">
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              {node.language}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* - Technologies subsection */}

                {/* + Experience subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What did I{" "}
                    <span className="word">work with</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>MSlate.ai Inc.</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Full Stack Developer Intern
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Dec 2020-Mar 2021
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Django | DjangoRestFramework | ReactJS | PostgreSQL |
                          AWS | Neo4j Graph Database | Bootstrap
                        </h4>
                      </div>

                      <div className="card-text">
                        Worked on building the digital infrastructure for Mslate.ai
                        startup using the following tech stack:
                        Developed Dynamic Patient Symptom check with report &
                        prescription section, chat/audio/video call feature for
                        patient-doctor communication, EHR schemas in
                        PostgreSQL & neo4j. Role-based login system with
                        effective handling of HTTP requests.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>SriRam Industries</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Web Development Intern
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Nov 2020-Dec 2020
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Django | Bootstrap | ORM | JWT | Admin User Flow
                        </h4>
                      </div>

                      <div className="card-text">
                      Created dynamic website for well-established firma company 
                      and was able to convert offline flow into digital platform.
                      </div>
                    </div>
                  </div>
                </div>
                {/* - Experience subsection */}

                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What have I{" "}
                    <span className="word">experimented with</span>?
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}

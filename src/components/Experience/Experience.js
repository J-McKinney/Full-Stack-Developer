import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Style from "./Experience.module.css";

function Experience() {
  var naylor = document.getElementById("naylorCard");
  var mvc = document.getElementById("mvcCard");
  var srm = document.getElementById("srmCard");
  var stem = document.getElementById("stemCard");

  function showNaylor() {
    naylor.style.display = "block";
    mvc.style.display = "none";
    srm.style.display = "none";
    stem.style.display = "none";
  }
  function showMVC() {
    naylor.style.display = "none";
    mvc.style.display = "block";
    srm.style.display = "none";
    stem.style.display = "none";
  }
  function showSrm() {
    naylor.style.display = "none";
    mvc.style.display = "none";
    srm.style.display = "block";
    stem.style.display = "none";
  }
  function showStem() {
    naylor.style.display = "none";
    mvc.style.display = "none";
    srm.style.display = "none";
    stem.style.display = "block";
  }

  return (
    <>
      <div className={Style.experienceWrapper}>
        <Container className={Style.experienceContainer}>
          <Row className={Style.experienceRow}>
            <Col className={Style.experienceCol}>
              <Card className={Style.card}>
                <Card.Body>
                  <Card.Title className={Style.cardTitle}>
                    <h2 className={Style.title}>Most Recent Work</h2>
                    <hr className={Style.hr} />
                  </Card.Title>
                </Card.Body>
              </Card>

              <Row className={Style.experienceRow}>
                <Col className={Style.experienceCol}>
                  <h5>
                    <ul className={Style.ul}>
                      <li onClick={showNaylor} className={Style.li}>
                        Naylor Association Solutions
                      </li>
                      <li onClick={showMVC} className={Style.li}>
                        MVC Travel Services
                      </li>
                      <li onClick={showSrm} className={Style.li}>
                        SRM-Inc.
                      </li>
                      <li onClick={showStem} className={Style.li}>
                        STEM Work
                      </li>
                    </ul>
                  </h5>
                </Col>
                <Col>
                  <Card
                    style={{ display: "block" }}
                    id="naylorCard"
                    className={Style.naylorCard}
                  >
                    <Card.Body>
                      <Card.Title className={Style.cardTitle}>
                        <h3 className={Style.title}>
                          Naylor Association Solutions
                        </h3>
                        <h5 className={Style.subTitle}>
                          &nbsp; Feb. 2022 - May 2022
                        </h5>
                      </Card.Title>
                      <ul className={Style.ulist}>
                        <Card.Text className={Style.cardText}>
                          <li className={Style.list}>
                            Write modern, performant, maintainable code for a
                            diverse array of client and internal projects.
                          </li>
                          <li className={Style.list}>
                            Work with a variety of different languages,
                            platforms, frameworks, and content management
                            systems such as JavaScript, BootStrap, Jade, Pug,
                            Node, and Express.
                          </li>
                          <li className={Style.list}>
                            Communicate with multi-disciplinary teams of
                            engineers, designers, producers, and clients on a
                            daily basis.
                          </li>
                        </Card.Text>
                      </ul>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{ display: "none" }}
                    id="mvcCard"
                    className={Style.mvcCard}
                  >
                    <Card.Body>
                      <Card.Title className={Style.cardTitle}>
                        <h3 className={Style.title}>MVC Travel Services</h3>
                        <h5 className={Style.subTitle}>
                          &nbsp; Nov. 2021 - Dec. 2021
                        </h5>
                      </Card.Title>
                      <ul className={Style.ulist}>
                        <Card.Text className={Style.cardText}>
                          <li className={Style.list}>
                            The website was designed with quite a number of
                            features that serves its purpose as a pet travel
                            assistant for Marietta Veterinary Clinic.
                          </li>
                          <li className={Style.list}>
                            Manually tested site in various browsers and mobile
                            devices to ensure cross-browser compatibility and
                            responsiveness.
                          </li>
                          <li className={Style.list}>
                            Developed and maintained code primarily using React,
                            CSS, Sass, JavaScript, and jQuery.
                          </li>
                        </Card.Text>
                      </ul>
                      <Card.Link
                        className={Style.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://j-mckinney.github.io/mvcts/home"
                      >
                        Check it out
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{ display: "none" }}
                    id="srmCard"
                    className={Style.srmCard}
                  >
                    <Card.Body>
                      <Card.Title className={Style.cardTitle}>
                        <h3 className={Style.title}>
                          Southern Restoration Maintenance Inc.
                        </h3>
                        <h5 className={Style.subTitle}>
                          &nbsp; Nov. 2021 - Dec. 2021
                        </h5>
                      </Card.Title>
                      <ul className={Style.ulist}>
                        <Card.Text className={Style.cardText}>
                          <li className={Style.list}>
                            Collaborated with client to spearhead a new brand
                            and design system for SRM-Inc.
                          </li>
                          <li className={Style.list}>
                            Keeping the features, styles, & personality of the
                            clients older website. I was able to recreate,
                            update, & optimize the new one to the clients
                            liking.
                          </li>
                          <li className={Style.list}>
                            Interfaced with client on a weekly basis, providing
                            technological expertise.
                          </li>
                        </Card.Text>
                      </ul>
                      <Card.Link
                        className={Style.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://j-mckinney.github.io/srm-inc/home"
                      >
                        Check it out
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{ display: "none" }}
                    id="stemCard"
                    className={Style.stemCard}
                  >
                    <Card.Body>
                      <Card.Title className={Style.cardTitle}>
                        <h3 className={Style.title}>STEM Work</h3>
                        <h5 className={Style.subTitle}>
                          &nbsp; Sept. 2021 - Nov. 2021
                        </h5>
                      </Card.Title>
                      <ul className={Style.ulist}>
                        <Card.Text className={Style.cardText}>
                          <li className={Style.list}>
                            This is a recreated close representation of a
                            government contracted website to help the national
                            employement loss of 2021.
                          </li>
                          <li className={Style.list}>
                            Built using a Full M.E.R.N. Stack and Google's
                            geolocation API.
                          </li>
                          <li className={Style.list}>
                            Built and shaped while leveraging third-party and
                            internal APIs.
                          </li>
                        </Card.Text>
                      </ul>
                      <Card.Link
                        className={Style.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://j-mckinney.github.io/find-a-stem-job/"
                      >
                        Check it out
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* <Row className={Style.experienceRow}>
            <Col className={Style.experienceCol}>Col1</Col>
            <Col className={Style.experienceCol}>Col2</Col>
            <Col className={Style.experienceCol}>Col3</Col>
          </Row> */}

          {/* <Row className={Style.experienceRow}>Row</Row> */}
        </Container>
      </div>
    </>
  );
}

export default Experience;

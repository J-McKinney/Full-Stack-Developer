import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Chef from "../../img/chef.jpg";
import Style from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={Style.aboutWrapper}>
        <Container className={Style.aboutContainer}>
          <Row className={Style.aboutRow}>
            <Col className={Style.aboutCol}>
              <Card className={Style.card}>
                <Card.Body>
                  <Card.Title className={Style.cardTitle}>
                    <h2 className={Style.title}>About Me</h2>
                    <hr className={Style.hr} />
                  </Card.Title>
                  <Card.Text className={Style.cardText}>
                    <h5>
                      &nbsp; I have a serious passion for UI effects, animations
                      and creating intuitive, dynamic user experiences. I thrive
                      on bringing ideas to life and delivering eye-catching
                      results ahead of schedule. I love creating innovative
                      solutions with polished user experiences. Typically, I
                      work with React, CSS, Express, Node and Mongo. From
                      interaction design to scaleable design systems,
                      single-page apps to something more experimental. I help
                      awesome people to build ambitious yet accessible web
                      projects. The wilder, the better.
                    </h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col>
              <h3>About Me</h3>
            </Col> */}
            {/* ///////////////////////////////////////////////////////////// */}
            <Col className={Style.myPicCol}>
              <img className={Style.pic} src={Chef} alt="chef" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;

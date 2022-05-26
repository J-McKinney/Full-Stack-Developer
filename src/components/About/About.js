import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./About.module.css";

const About = () => {
  return (
    <>
    <div className={Style.aboutWrapper}>
      <Container className={Style.aboutContainer}>
        <Row className={Style.aboutRow}>
          <Col className={Style.aboutCol}>About Section</Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default About;

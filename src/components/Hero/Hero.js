import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={Style.heroWrapper}>
        <Container className={Style.heroContainer}>
          <Row className={Style.heroRow}>
            <Col className={Style.heroCol}>
              <h5 className={Style.hi}>Hi, my name is</h5>
            </Col>
          </Row>
          <Row className={Style.heroRow}>
            <Col className={Style.heroCol}>
              <h1 className={Style.name}>Jesse McKinney.</h1>
            </Col>
          </Row>
          <Row className={Style.heroRow}>
            <Col className={Style.heroCol}>
              <h1 className={Style.statement}>I build things for the web.</h1>
            </Col>
          </Row>
          <Row className={Style.heroRow}>
            <Col className={Style.heroCol}>
              <h5 className={Style.exert}>
                I’m a software engineer specializing in building and designing
                exceptional digital experiences. I enjoy creating things that
                live on the internet.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;

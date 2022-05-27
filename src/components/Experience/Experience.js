import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Experience.module.css";

const Experience = () => {
  return (
    <>
    <div className={Style.experienceWrapper}>
      <Container className={Style.experienceContainer}>
        <Row className={Style.experienceRow}>
          <Col className={Style.experienceCol}>Experience Section</Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Experience;

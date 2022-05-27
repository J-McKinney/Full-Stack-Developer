import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Work.module.css";

const Work = () => {
  return (
    <>
    <div className={Style.workWrapper}>
      <Container className={Style.workContainer}>
        <Row className={Style.workRow}>
          <Col className={Style.workCol}>Work Section</Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Work;

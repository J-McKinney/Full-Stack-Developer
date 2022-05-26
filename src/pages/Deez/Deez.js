import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Deez.module.css";

const Deez = () => {
  return (
    <>
      <div className={Style.deezWrapper}>
        <Container className={Style.deezContainer}>
          <Row className={Style.deezRow}>
            <Col className={Style.deezCol}>Col</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Deez;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={Style.contactWrapper}>
        <Container className={Style.contactContainer}>
          <Row className={Style.contactRow}>
            <Col className={Style.contactCol}>Contact Section</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;

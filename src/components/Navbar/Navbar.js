import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
    <div className={Style.navbarWrapper}>
      <Container className={Style.navbarContainer}>
        <Row className={Style.navbarRow}>
          <Col className={Style.navbarCol}>Navbar Section</Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Navbar;

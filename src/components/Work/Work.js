import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Design from "../../img/design.jpg";
// import STEM from "../../img/stem.jpg"
// import Code from "../../img/code.jpg";
import Launch from "../../img/launch.jpg";
import Style from "./Work.module.css";

const Work = () => {
  return (
    <>
      <div className={Style.workWrapper}>
        <Container className={Style.workContainer}>
          <Container>
            <Row className={Style.workRow}>
              <Col className={Style.workCol}>
                <div className={Style.card}>
                  <div className={Style.imgBox}>
                    <img id={Style.img} src={Launch} alt="alt" />
                    <img id={Style.img} src={Design} alt="alt" />
                  </div>
                  <div className={Style.details}>
                    <div className={Style.content}>
                      <h3 className={Style.title}>
                        Someone Famous <br />
                        <span className={Style.exert}>Graphic Designer</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className={Style.workCol}>
                <Card
                  style={{
                    margin: "60px 0px 0px 60px",
                    background: "transparent",
                    color: "white",
                    width: "90%",
                    borderStyle: "none"
                  }}
                >
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle>Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className={Style.workRow}>
              <Col className={Style.workCol}>
                <div className={Style.card}>
                  <div className={Style.imgBox}>
                    <img id={Style.img} src={Design} alt="alt" />
                    <img id={Style.img} src={Launch} alt="alt" />
                  </div>
                  <div className={Style.details}>
                    <div className={Style.content}>
                      <h2 className={Style.title}>
                        Someone <br />
                        <span className={Style.exert}>Graphic</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

          </Container>
        </Container>

        {/* <Row className={Style.workRow}>
            <Col className={Style.workCol}>Col</Col>
            <Col className={Style.workCol}>Col</Col>
            <Col className={Style.workCol}>Col</Col>
          </Row>

          <Row className={Style.workRow}>
            <Col className={Style.workCol}>Col</Col>
            <Col className={Style.workCol}>Col</Col>
            <Col className={Style.workCol}>Col</Col>
          </Row>

          <Row className={Style.workRow}>
            <Col className={Style.workCol}>Col</Col>
            <Col className={Style.workCol}>Col</Col>
            <Col className={Style.workCol}>Col</Col>
          </Row>

          <Row className={Style.workRow}>Row</Row>

          <Row className={Style.workRow}>Row</Row>

          <Row className={Style.workRow}>Row</Row> */}
      </div>
    </>
  );
};

export default Work;

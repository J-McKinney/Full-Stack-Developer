import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Design from "../../img/design.jpg";
import Launch from "../../img/launch.jpg";
import Style from "./Work.module.css";

const Work = () => {
  return (
    <>
      <div className={Style.workWrapper}>
        <Container className={Style.workContainer}>
          <Container>
            <Row className={Style.workRow}>
              <Card className={Style.topCard}>
                <Card.Body>
                  <Card.Title className={Style.topCardTitle}>
                    <h2 className={Style.topTitle}>Some Things I've Built</h2>
                    <hr className={Style.topHr} />
                  </Card.Title>
                </Card.Body>
              </Card>

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
                <Card className={Style.cardWrapper}>
                  <Card.Body className={Style.cardBody}>
                    <Card.Title className={Style.cardTitle}>
                      Card Title
                    </Card.Title>
                    <Card.Subtitle className={Style.cardSubTitle}>
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text className={Style.cardText}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link className={Style.cardLink} href="#">
                      Card Link
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className={Style.workRow}>
              <Col className={Style.workCol}>
                <Card className={Style.cardWrapper1}>
                  <Card.Body className={Style.cardBody}>
                    <Card.Title className={Style.cardTitle}>
                      Card Title 1
                    </Card.Title>
                    <Card.Subtitle className={Style.cardSubTitle}>
                      Card Subtitle 1
                    </Card.Subtitle>
                    <Card.Text className={Style.cardText}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. 1
                    </Card.Text>
                    <Card.Link className={Style.cardLink} href="#">
                      Card Link 1
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col className={Style.workCol}>
                <div className={Style.card1}>
                  <div className={Style.imgBox}>
                    <img id={Style.img} src={Design} alt="alt" />
                    <img id={Style.img} src={Launch} alt="alt" />
                  </div>
                  <div className={Style.details}>
                    <div className={Style.content}>
                      <h2 className={Style.title}>
                        Someone Famous <br />
                        <span className={Style.exert}>Graphic Designer</span>
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

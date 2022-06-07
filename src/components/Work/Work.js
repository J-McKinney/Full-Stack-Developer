import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Fore from "../../img/Fore1.png";
import ForeCast from "../../img/Forecast.png";
import GolfHole from "../../img/golfHole.jpg";
import GolfSil from "../../img/golfSil.jpg";
import Mic from "../../img/mic.png";
import Sing from "../../img/sing.jpg";
import Similtune from "../../img/Similtune.png";
import MyModal from "../MyModal/MyModal";
import Style from "./Work.module.css";

const Work = () => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
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
                    <img id={Style.img} src={GolfSil} alt="Golf Swing" />
                    <img id={Style.img} src={GolfHole} alt="Golf Ball" />
                  </div>
                  <div className={Style.details}>
                    <div className={Style.content}>
                      <h2 className={Style.title}>
                        The ForeCast App
                        <br />
                        <span className={Style.exert}>React Native</span>
                        <br />
                        <span className={Style.exert}>YELP API</span>
                        <br />
                        <span className={Style.exert}>Google API</span>
                        <br />
                        <span className={Style.exert}>Geolocation</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </Col>

              <Col className={Style.workCol}>
                <Card className={Style.cardWrapper}>
                  <Card.Body className={Style.cardBody}>
                    <Card.Title className={Style.cardTitle}>
                      <h2>ForeCast</h2>
                    </Card.Title>
                    <hr className={Style.topHr} />
                    <Card.Text className={Style.cardText}>
                      &nbsp; ForeCast allows you to find the nearest place to go
                      play a quick round of golf. With one click, you can find
                      the top 50 closest courses ranging from closest to
                      furthest from your position. Just press on the address or
                      phone number and you will be directed straight to that
                      location.
                    </Card.Text>
                    <Button
                      className={Style.workBtn}
                      onClick={() => setModalOne(true)}
                    >
                      See More
                    </Button>
                    <MyModal
                      className={Style.modal}
                      heading="ForeCast"
                      titleOne="Web Application"
                      imgOne={ForeCast}
                      imgOneStyle={{ height: "70vh" }}
                      altOne="Golf App"
                      titleTwo="Mobile Application"
                      imgTwo={Fore}
                      imgTwoStyle={{ height: "70vh" }}
                      altTwo="Golf App"
                      show={modalOne}
                      onHide={() => setModalOne(false)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className={Style.workRow}>
              <Col className={Style.workCol}>
                <Card className={Style.cardWrapper1}>
                  <Card.Body className={Style.cardBody}>
                    <Card.Title className={Style.cardTitle}>
                      <h2>SimilTune</h2>
                    </Card.Title>
                    <hr className={Style.topHr} />
                    <Card.Text className={Style.cardText}>
                      A word/song association game. If music trivia is your
                      thing then, you’ll love SimilTune. Start a new round and
                      see how many songs you can sing that have the chosen word
                      in its lyrics. Points depend on accuracy and speed within
                      the time limit. Challenge yourself or friends with music
                      knowledge for the high score.
                    </Card.Text>
                    <Button
                      className={Style.workBtn}
                      onClick={() => setModalTwo(true)}
                    >
                      See More
                    </Button>
                    <MyModal
                      className={Style.modal}
                      heading="SimilTune"
                      imgOne={Similtune}
                      imgOneStyle={{ width: "50vw" }}
                      altOne="SimilTune App"
                      show={modalTwo}
                      onHide={() => setModalTwo(false)}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col className={Style.workCol}>
                <div className={Style.card1}>
                  <div className={Style.imgBox1}>
                    <img id={Style.img} src={Mic} alt="Microphone" />
                    <img id={Style.img} src={Sing} alt="Sing" />
                  </div>
                  <div className={Style.details}>
                    <div className={Style.content}>
                      <h2 className={Style.title}>
                        SimilTune
                        <br />
                        <span className={Style.exert}>React/React Native</span>
                        <br />
                        <span className={Style.exert}>Express</span>
                        <br />
                        <span className={Style.exert}>Node</span>
                        <br />
                        <span className={Style.exert}>Mongoose</span>
                        <br />
                        <span className={Style.exert}>Speech-To-Text</span>
                        <br />
                        <span className={Style.exert}>Genius API</span>
                        <br />
                        <span className={Style.exert}>Spotify API</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className={Style.bottomContainer}>
            <Card className={Style.bottomCard}>
              <Card.Link
                className={Style.link}
                target="_blank"
                rel="noopener noreferrer"
                href="/Full-Stack-Developer"
                disabled="true"
              >
                More Fun Stuff Coming Soon
              </Card.Link>
            </Card>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Work;

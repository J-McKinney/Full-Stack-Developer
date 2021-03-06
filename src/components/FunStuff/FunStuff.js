import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./FunStuff.module.css";

const FunStuff = () => {
  return (
    <>
      <div className={Style.aboutWrapper}>
        <Container className={Style.aboutContainer}>
          <Row className={Style.aboutRow}>
            <Row className={Style.loaderRow}>
              <Col className={Style.loaderCol}>
                <div className={Style.loader}>
                  <span
                    className={Style.span}
                    style={{ zIndex: "10", animationDelay: "-1s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "9", animationDelay: "-2s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "8", animationDelay: "-3s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "7", animationDelay: "-4s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "6", animationDelay: "-5s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "5", animationDelay: "-6s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "4", animationDelay: "-7s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "3", animationDelay: "-8s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "2", animationDelay: "-9s" }}
                  ></span>
                  <span
                    className={Style.span}
                    style={{ zIndex: "1", animationDelay: "-10s" }}
                  ></span>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FunStuff;

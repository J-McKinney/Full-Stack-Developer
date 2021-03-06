import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Work from "../../components/Work/Work";
import Footer from "../../components/Footer/Footer";
import { Transition } from "react-transition-group";
import anime from "animejs";
import Style from "./Main.module.css";
import "./animatedBG.css";

const navlinks = [
  { name: "About", to: "#/About" },
  { name: "Experience", to: "#/Experience" },
  { name: "Work", to: "#/Work" },
  { name: "Contact", to: "#/Contact" },
];

const duration1 = 300;
const duration2 = 600;

const defaultStyle1 = {
  transition: `opacity ${duration1}ms ease-in-out`,
  opacity: 0,
};
const defaultStyle2 = {
  transition: `opacity ${duration2}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const Main = () => {
  const [inProp1, setInProp1] = useState(true);
  const [inProp2, setInProp2] = useState(false);

  useEffect(() => {
    setInProp1(!inProp1);
    setInProp2(!inProp2);
    const animateBlocks = () => {
      let container = document.querySelector(".BGContainer");
      for (var i = 0; i <= 14; i++) {
        let blocks = document.createElement("div");
        blocks.classList.add("block");
        container.appendChild(blocks);
      }

      anime({
        targets: ".block",
        translateX: function () {
          return anime.random(-700, 700);
        },
        translateY: function () {
          return anime.random(-250, 400);
        },
        rotate: function () {
          return anime.random(0, 350);
        },
        easing: "linear",
        duration: 500,
        boxShadow: function () {
          return "10px 10px 50px rgba(0, 0, 0, 0.6)";
        },
        delay: anime.stagger(200),
      });
    };
    animateBlocks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar links={navlinks} />
      {/* <Navbar /> */}
      <div className={Style.introWrapper}>
        <Transition in={inProp1} timeout={3900}>
          {(state) => (
            <div
              style={{
                ...defaultStyle1,
                ...transitionStyles[state],
              }}
            >
              <div id={Style.BGWrapper} className="BGWrapper">
                <div id={Style.BGContainer} className="BGContainer">
                  <div className={Style.App}>
                    <header className={Style.AppHeader}>
                      <h3 className={Style.code}>
                        BRING YOUR IDEAS TO LIFE WITH CODE.
                      </h3>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>

      <div className={Style.mainWrapper}>
        <Transition in={inProp2} timeout={4000}>
          {(state) => (
            <div
              style={{
                ...defaultStyle2,
                ...transitionStyles[state],
              }}
            >
              <section id="/Hero">
                <Hero />
              </section>
            </div>
          )}
        </Transition>
        <section id="/About">
          <About />
        </section>
        <section id="/Experience">
          <Experience />
        </section>
        <section id="/Work">
          <Work />
        </section>
        <section id="/Contact">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Main;

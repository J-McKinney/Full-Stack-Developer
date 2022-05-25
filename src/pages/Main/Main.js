import React, { useEffect } from "react";
import anime from "animejs";
import logo from "../../logo.svg";
import Style from "./Main.module.css";
import "./animatedBG.css";

function Main() {
  useEffect(() => {
    const animateBlocks = () => {
      let container = document.querySelector(".BGContainer");
      for (var i = 0; i <= 60; i++) {
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
        scale: function () {
          return anime.random(10, 50);
        },
        // loop: true,
        direction: "alternate",
        easing: "linear",
        duration: 1000,
        delay: anime.stagger(200),
      });
    };
    animateBlocks();
  }, []);

  return (
    <>
      <div id={Style.BGWrapper} className="BGWrapper">
        <div id={Style.BGContainer} className="BGContainer">
          <div className={Style.App}>
            <header className={Style.AppHeader}>
              <img src={logo} className={Style.AppLogo} alt="logo" />
              <h1 className={Style.code}>
                Jesse McKinney - Full Stack Developer
              </h1>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

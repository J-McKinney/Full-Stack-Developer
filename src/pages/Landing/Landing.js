import React from "react";
import { Link } from "react-router-dom";
import Tech from "../../img/tech.jpg";
import Style from "./Landing.module.css";

// function Landing() {
  const Landing = () => {
  return (
    <>
      <div className={Style.App}>
        <div className={Style.AppHeader}>
          <img className={Style.techImg} src={Tech} alt="Alt" />
          <Link className={Style.button} to="/Main">
            <button className={Style.button}>Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;

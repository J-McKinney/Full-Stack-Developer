/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Contact from "../Contact/Contact";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Style.bodyWrapper}>
        <Contact />
        <div className={Style.footerWrapper}>
          <footer className={Style.footer}>
            <div className={Style.waves}>
              <div className={Style.wave} id={Style.wave1} />
              <div className={Style.wave} id={Style.wave2} />
              <div className={Style.wave} id={Style.wave3} />
              <div className={Style.wave} id={Style.wave4} />
            </div>
            <ul className={Style.social_icon}>
              <li className={Style.li}>
                <a className={Style.href} href="#" alt="facebook">
                  <ion-icon
                    className={Style.facebook}
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>
              <li className={Style.li}>
                <a className={Style.href} href="#" alt="twitter">
                  <ion-icon
                    className={Style.twitter}
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </li>
              <li className={Style.li}>
                <a className={Style.href} href="#" alt="linkedin">
                  <ion-icon
                    className={Style.linkedin}
                    name="logo-linkedin"
                  ></ion-icon>
                </a>
              </li>
              <li className={Style.li}>
                <a className={Style.href} href="#" alt="instagram">
                  <ion-icon
                    className={Style.instagram}
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

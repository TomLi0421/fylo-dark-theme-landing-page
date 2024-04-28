import React from "react";
import logo from "../../assets/images/logo.svg";
import location_icon from "../../assets/images/icon-location.svg";
import phone_icon from "../../assets/images/icon-phone.svg";
import email_icon from "../../assets/images/icon-email.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="mt-20 px-6 lg:px-24 pt-52">
      <img className="pl-3" src={logo} alt="logo" />
      <div className="lg:grid lg:grid-cols-6 lg:gap-x-12 mt-12">
        <div className="flex gap-x-6 lg:col-span-2">
          <img className="w-6 h-6" src={location_icon} alt="location icon" />
          <span className={`${styles.footer__contact_color}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>

        <div>
          <div className="flex gap-x-6 mt-6 lg:mt-0">
            <img src={phone_icon} alt="phone icon" />
            <span className={`${styles.footer__contact_color}`}>
              +1-543-123-4567
            </span>
          </div>
          <div className="flex gap-x-6 mt-6">
            <img src={email_icon} alt="email icon" />
            <span className={`${styles.footer__contact_color}`}>
              example@fylo.com
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <a
            className={`${styles.footer__contact_color} mt-12 lg:mt-0`}
            href="#"
          >
            About Us
          </a>
          <a className={`${styles.footer__contact_color} mt-3`} href="#">
            Jobs
          </a>
          <a className={`${styles.footer__contact_color} mt-3`} href="#">
            Press
          </a>
          <a className={`${styles.footer__contact_color} mt-4`} href="#">
            Blog
          </a>
        </div>

        <div className="flex flex-col">
          <a
            className={`${styles.footer__contact_color} mt-12 lg:mt-0`}
            href="#"
          >
            Contact Us
          </a>
          <a className={`${styles.footer__contact_color} mt-3`} href="#">
            Terms
          </a>
          <a className={`${styles.footer__contact_color} mt-3`} href="#">
            Privacy
          </a>
        </div>

        <div className="flex mt-24 pb-12 justify-center gap-x-6 lg:mt-0">
          <div
            className={`${styles.footer__socials_icons} border border-solid border-white h-12 w-12 text-white flex justify-center items-center rounded-full`}
          >
            <i className="fab fa-facebook-f fa-xl"></i>
          </div>
          <div
            className={`${styles.footer__socials_icons} border border-solid border-white h-12 w-12 text-white flex justify-center items-center rounded-full`}
          >
            <i class="fa-brands fa-x-twitter fa-xl"></i>
          </div>
          <div
            className={`${styles.footer__socials_icons} border border-solid border-white h-12 w-12 text-white flex justify-center items-center rounded-full`}
          >
            <i class="fa-brands fa-instagram fa-xl"></i>
          </div>
        </div>
      </div>

      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/TomLi0421">TomLi0421</a>.
      </div>
    </footer>
  );
}

export default Footer;

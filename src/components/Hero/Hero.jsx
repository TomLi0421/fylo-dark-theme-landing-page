import React from "react";
import intro_img from "../../assets/images/illustration-intro.png";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import desktop_bg from "../../assets/images/bg-curvy-desktop.svg";
import mobile_bg from "../../assets/images/bg-curvy-mobile.svg";
import { useWindowSize } from "@uidotdev/usehooks";

function Hero() {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  return (
    <div className={`${styles.hero_bg_color}`}>
      <div className="flex flex-col items-center px-6 pt-20 relative z-10 max-w-lg mx-auto">
        <img src={intro_img} alt="intro" />
        <h1 className={`${styles.hero__title} mt-12 text-2xl text-center `}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className={`${styles.hero__content} my-6 text-center `}>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button className="py-3 px-20">Get Started</Button>
      </div>
      <img
        className={
          isMobile ? "absolute -bottom-10 w-full" : "absolute bottom-64 w-full"
        }
        src={isMobile ? mobile_bg : desktop_bg}
        alt="curve"
      />
    </div>
  );
}

export default Hero;

import React from "react";
import productive_img from "../../assets/images/illustration-stay-productive.png";
import styles from "./Jumbotrons.module.css";

function Jumbotrons() {
  return (
    <div className="px-6 lg:flex lg:items-center lg:gap-x-9 lg:max-w-screen-xl lg:mx-auto">
      <img
        className="mx-auto"
        src={productive_img}
        alt="Stay productive, wherever you are"
      />
      <div className="lg:pr-12">
        <h2
          className={`${styles.jumbotrons__title} mt-6 text-base lg:text-4xl`}
        >
          Stay productive, wherever you are
        </h2>
        <p className={`${styles.jumbotrons__description} mt-3`}>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className={`${styles.jumbotrons__description} mt-3`}>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          className={`${styles.jumbotrons__description__link} mt-3 flex items-center gap-x-1 underline underline-offset-8 hover:text-white hover:cursor-pointer `}
        >
          See how Fylo works
        </a>
      </div>
    </div>
  );
}

export default Jumbotrons;

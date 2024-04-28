import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import styles from "./Subscription.module.css";

function Subscription() {
  const eamilInput = useRef();
  const [email, setEmail] = useState("");

  function submitForm(e) {
    e.preventDefault();
    setEmail(eamilInput.current.value.includes("@") ? "" : "invalid");
  }

  return (
    <div
      className={`${styles.subscription_bg_color} relative top-52 text-center mx-6 px-6 py-9 rounded-md lg:max-w-screen-md lg:mx-auto lg:px-12`}
    >
      <h3 className={`${styles.subscription__title} text-lg`}>
        Get early access today
      </h3>
      <p className={`${styles.subscription__content} mt-3`}>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="lg:grid lg:grid-cols-3 lg:gap-x-3" onSubmit={submitForm}>
        <input
          ref={eamilInput}
          className="my-6 w-full rounded-full pl-6 py-3 lg:col-span-2"
          type="email"
          placeholder="email@example.com"
        />
        <Button className="py-3 w-full lg:my-6">Get Started For Free</Button>
        {email === "invalid" && (
          <p
            className={`${styles.subscription__invalid__email} mt-3 lg:text-left lg:ml-6 lg:col-span-2 lg:mt-0`}
          >
            Please ent a valid email address
          </p>
        )}
      </form>
    </div>
  );
}

export default Subscription;

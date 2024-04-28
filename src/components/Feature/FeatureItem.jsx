import React from "react";
import styles from "./FeatureItem.module.css";

function FeatureItem({ img, title, description }) {
  return (
    <div className="flex flex-col items-center mb-20 lg:max-w-sm">
      <img src={img} alt={title} />
      <h2
        className={`${styles.feature__items__title} mt-6 text-center text-lg`}
      >
        {title}
      </h2>
      <p className={`${styles.feature__items__description} mt-3 text-center`}>
        {description}
      </p>
    </div>
  );
}

export default FeatureItem;

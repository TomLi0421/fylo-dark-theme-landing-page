import React from "react";
import styles from "./QuoteCard.module.css";

function QuoteCard({ content, authorIcon, authorName, authorTitle }) {
  return (
    <div className={`${styles.quote_card__bg_color} px-6 py-9 mb-6 rounded`}>
      <p className={`${styles.quote_card__content}`}>{content}</p>

      <div className="flex mt-6 gap-x-3">
        <img
          className="rounded-full w-12 h-12"
          src={authorIcon}
          alt={authorName}
        />
        <div>
          <h3 className={`${styles.quote_card__author_name}`}>{authorName}</h3>
          <p className={`${styles.quote_card__author_title} text-xs mt-1.5`}>
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;

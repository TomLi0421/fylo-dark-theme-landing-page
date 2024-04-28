import React from "react";
import quote_img from "../../assets/images/bg-quotes.png";
import satish_icon from "../../assets/images/profile-1.jpg";
import bruce_icon from "../../assets/images/profile-2.jpg";
import lva_icon from "../../assets/images/profile-3.jpg";
import QuoteCard from "./QuoteCard";

const quotes = [
  {
    content:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    authorIcon: satish_icon,
    authorName: "Satish Patel",
    authorTitle: "Founder & CEO, Huddle",
  },
  {
    content:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    authorIcon: bruce_icon,
    authorName: "Bruce McKenzie",
    authorTitle: "Founder & CEO, Huddle",
  },
  {
    content:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    authorIcon: lva_icon,
    authorName: "Iva Boyd",
    authorTitle: "Founder & CEO, Huddle",
  },
];

function Quote() {
  return (
    <div className="mt-44 px-8 lg:max-w-screen-xl lg:mx-auto">
      <img
        className="w-9 lg:relative lg:top-2 lg:right-1 lg:-z-10"
        src={quote_img}
        alt="quote"
      />
      <div className="lg:grid lg:grid-cols-3 gap-x-6">
        {quotes.map((quote, indx) => (
          <QuoteCard
            key={indx}
            content={quote.content}
            authorIcon={quote.authorIcon}
            authorName={quote.authorName}
            authorTitle={quote.authorTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default Quote;

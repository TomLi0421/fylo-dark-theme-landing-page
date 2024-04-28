import React from "react";
import access_files_img from "../../assets/images/icon-access-anywhere.svg";
import security_img from "../../assets/images/icon-security.svg";
import real_time_img from "../../assets/images/icon-collaboration.svg";
import store_files_img from "../../assets/images/icon-any-file.svg";
import FeatureItem from "./FeatureItem";

const features = [
  {
    title: "Access your files, anywhere",
    img: access_files_img,
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    title: "Security you can trust",
    img: security_img,
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    title: "Real-time collaboration",
    img: real_time_img,
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    title: "Store any type of file",
    img: store_files_img,
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

function Feature() {
  return (
    <div className="relative z-10 px-6 mt-20 lg:grid grid-cols-2 lg:gap-x-16 lg:max-w-screen-lg lg:mx-auto">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          img={feature.img}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default Feature;

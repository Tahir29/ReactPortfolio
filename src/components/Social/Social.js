import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import ReactGA from "react-ga";
import "./Social.scss";

const Social = () => {
  const FBClickHandler = () => {
    ReactGA.event({
      category: "FaceBook",
      action: "FaceBook Icon Clicked",
    });
  };

  const InstagramClickHandler = () => {
    ReactGA.event({
      category: "Instagram",
      action: "Instagram Icon Clicked",
    });
  };

  const LinkedInClickHandler = () => {
    ReactGA.event({
      category: "LinkedIn",
      action: "LinkedIn Icon Clicked",
    });
  };

  return (
    <div className="center-social">
      <a
        href="https://www.facebook.com/tahir.kutty"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
        title="Facebook"
        onClick={FBClickHandler}
      >
        <span className="icon">
          <FaFacebookF />
        </span>
      </a>
      <a
        href="https://www.instagram.com/tahirk19/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
        title="Instagram"
        onClick={InstagramClickHandler}
      >
        <span className="icon">
          <FaInstagram />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/tahir-kutty-b26aa79b/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        title="Linked In"
        onClick={LinkedInClickHandler}
      >
        <span className="icon">
          <FaLinkedinIn />
        </span>
      </a>
    </div>
  );
};

export default Social;

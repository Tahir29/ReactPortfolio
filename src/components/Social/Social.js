import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./Social.scss";

const Social = () => {
  return (
    <div className="center-social">
      <a
        href="https://www.facebook.com/tahir.kutty"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
        title="Facebook"
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
      >
        <span className="icon">
          <FaLinkedinIn />
        </span>
      </a>
    </div>
  );
};

export default Social;

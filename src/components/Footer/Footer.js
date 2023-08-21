import React from "react";
import ReactGA from "react-ga4";
import "./Footer.scss";

const Footer = () => {
  const MailClickHandler = () => {
    ReactGA.event({
      category: "Footer Email",
      action: "Footer Email Clicked",
    });
  };

  const FullYear = new Date();
  let year = FullYear.getFullYear();

  return (
    <section className="section__footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper--left">
          <p>Copyright &copy; {year} - All Rights Reserved</p>
        </div>
        <div className="footer__wrapper--right">
          <p>
            <a href="mailto:tahir.kutty@gmail.com" onClick={MailClickHandler}>
              tahir.kutty@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

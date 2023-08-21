import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeContext } from "./contexts/ThemeContext";
import ReactGA from "react-ga4";
// import AnimatedCursor from "react-animated-cursor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);
  const trackingId = "G-M2P9D6TDWV";
  ReactGA.initialize(trackingId);
  ReactGA.send({
    hitType: "pageview",
    page: "/",
  });

  return (
    <div className="app" id={theme}>
      <ScrollToTop />
      {/* <AnimatedCursor
          innerSize={8}
          outerSize={24}
          color="0, 0, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          outerStyle={{
            border: "1px solid #D3D8DD",
          }}
          trailingSpeed={10}
        /> */}
      <Header />
      <Home />
      <About />
      {/* <Skill /> */}
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

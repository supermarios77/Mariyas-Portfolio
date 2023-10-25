import React from "react";
import "./Home.css";
import PFP from "../../assets/PFP.png";
import Typed from "typed.js";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Web Developer", " Python Programmer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home container" id="home">

      <div className="intro">

        <img src={PFP} alt="pfp" className="PFP" />

        <h1 className="home__name">Mariya Baig</h1>
        <span className="home__education" ref={el} />

        <div className="home__socials">

          <a href="https://github.com/supermarios77" className="home__social-link" >
            <i className="fa-brands fa-github"></i>
          </a>

        </div>

        <a href="#contact" className="btn">Contact Me</a>

        <ScrollDown />
        
      </div>

      <Shapes />

    </section>
  )
}

export default Home
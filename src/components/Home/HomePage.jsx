import React from "react";
import Typed from "typed.js";
import "./HomePage.css";
import rocket from "../../assets/Rocket.json";
import Lottie from "lottie-react";

const HomePage = () => {
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
    <div className="Home">
      <div className="content">
        <Lottie animationData={rocket} className="Rocket" />
        <h1>
          I&apos;m Mariya Baig A <br /> <span className="Highlight" ref={el} />
        </h1>
        <a href="#about" className="btn">
          About Me -&gt;
        </a>
      </div>
    </div>
  );
};

export default HomePage;

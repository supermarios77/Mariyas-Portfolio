import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Mars from "../../assets/Mars.json";
import "./About.css";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay showing the content for a smooth opening transition
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className={`About ${showContent ? "show" : ""}`}>
      <div className="container">
        <div className="left">
          <h2>About Me</h2>
          <p>
            I'm Mariya Baig, a junior full-stack developer with a passion for
            creating amazing web experiences. I love to bring ideas to life
            through code and design. Let's explore the cosmos of web development
            together!
          </p>
          <p>
            With a strong foundation in React, HTML, CSS, and JavaScript for the
            frontend, and MongoDB, Node.js, and Express.js for the backend, I'm
            well-equipped to tackle a wide range of web development projects.
          </p>
          <p>
            Whether it's building interactive web applications or crafting
            RESTful APIs, I'm always up for a challenge. I'm also familiar with
            three.js for 3D graphics and animations, adding another dimension to
            my skills.
          </p>
          <button className="btn">Contact Me</button>
        </div>
        <div className="right">
          <Lottie
            animationData={Mars}
            className={`Mars ${showContent ? "animate" : ""}`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
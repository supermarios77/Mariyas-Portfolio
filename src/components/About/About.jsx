import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Mars from "../../assets/Mars.json";
import "./About.css";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className={`About ${showContent ? "show" : ""}`}>
      <div className="container">
        <div className="left">
          <h2>About Me</h2>
          <p>
            👋 Hey there! I'm an 11-year-old junior full stack developer with a
            passion for coding that started when I was just 7 and a half years
            old. My journey began with Memo, where I started learning HTML. At
            the age of 8, I delved into Python through Google's Grasshopper app.
            Fast forward to 2022 when I was 10 and a half, and I embarked on a
            remarkable journey by completing the Python 3 Bootcamp by Jose
            Portilla. I wrapped it up in early 2023, at the ripe age of 11.
          </p>
          <p>
            🌟 My coding adventure continued as I explored the world of web
            development with Angela Yu's Complete Web Developer Bootcamp 2023.
            Angela's guidance helped me rekindle my HTML knowledge and build a
            strong foundation from scratch. In August, I am currently immersed
            in the world of machine learning with Daniel Bourke's TensorFlow
            Developer Certificate course (ZTM).
          </p>
          <p>
            🚀 While I enjoy Python and Machine Learning, my heart truly belongs
            to web development. I'm always eager to learn and explore new
            concepts. It's incredible to think how far I've come in just a few
            short years. The coding journey is just beginning, and I can't wait
            to see where it takes me! 🌐💻🚀
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
import "./About.css";
import PFP from "../../assets/PFP3.png"

const About = () => {
  return (
    <section className="about container section" id="about">

      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">

        <img src={PFP} alt="About PFP" className="about_img" />

        <div className="about__data grid">

          <div className="about__info">

          <p className="about__description">
            I&apos;m Mariya Baig, a junior full-stack developer and Python Programmer with a passion for
            creating amazing projects. I love to bring ideas to life
            through code and design
          </p>

          <a href="#projects" className="btn">Check Out My Projects</a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About
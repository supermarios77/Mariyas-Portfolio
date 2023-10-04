import "./Skills.css";
import MongoIcon from "../../assets/MongoIcon.svg";
import ExpressIcon from "../../assets/ExpressJS-Icon.svg";

const Skills = () => {
  return (
    <section>
      <header className="Header">Skills</header>
      <div className="skill">

        <div className="set">

          <i className="fa-solid fa-globe" id="title-icon"></i>
          <header>Web Development</header>

          <div className="list">
            <label>HTML</label>
            <i className="fa-brands fa-html5" id="icon"></i>
          </div>

          <div className="list">
            <label>CSS</label>
            <i className="fab fa-css3-alt" id="icon"></i>
          </div>

          <div className="list">
            <label>Javascript</label>
            <i className="fab fa-js" id="icon"></i>
          </div>

          <div className="list">
            <label>React</label>
            <i className="fa-brands fa-react" id="icon"></i>
          </div>

          <div className="list">
            <label>NodeJS</label>
            <i className="fa-brands fa-node" id="icon"></i>
          </div>

          <div className="list">
            <label>MongoDB</label>
            <img src={MongoIcon} alt="MongoDB Icon" width="20rem" id="icon"/>
          </div>

          <div className="list">
            <label>ExpressJS</label>
            <img
              src={ExpressIcon}
              alt="ExpressJS Icon"
              width="20rem"
              className="express-icon"
              id="icon"
            />
          </div>

          <div className="list">
            <label>RestFul APIS & APIS</label>
          </div>
        </div>

        <div className="set">

          <i className="fa-brands fa-python" id="title-icon"></i>
          <header>Python</header>

          <div className="list">
            <label>OOP (Object Oriented Programming)</label>
          </div>

          <div className="list">
            <label>Advanced Python</label>
          </div>

          <div className="list">
            <label>PyGame</label>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;

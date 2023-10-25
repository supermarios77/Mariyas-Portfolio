import "./Resume.css";
import data from "./Data";
import Card from "./Card"

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">My Experience</h2>

      <div className="resume__container grid">

        <div className="timeline grid">
          {data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} description={val.description} />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {data.map((val, index) => {
            if (val.category === "work") {
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} description={val.description} />
              )
            }
          })}
        </div>

      </div>
    </section>
  )
}

export default Resume
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
   id: 1,
   image: Image1,
   title: "UI/UX Design",
   description: "I create stunning user interfaces and delightful user experiences.",
  },
  {
    id: 2,
    image: Image2,
    title: "Fullstack / Frontend Development",
    description: "I craft responsive and interactive web apps using the latest technologies.",
   },
   {
    id: 2,
    image: Image3,
    title: "Python Game Development",
    description: "I create fun and engaging 2D games using Python and pygame.",
   },
]

const Services = () => {
  return (
   <section className="services container section" id="services">

    <h2 className="section__title">My Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt={title} className="services__img"/>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
   </section>
  )
}

export default Services
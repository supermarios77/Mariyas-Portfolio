import "./Projects.css"

const ProjectCard = ({ key, image, title, link, category }) => {
  return (
    <div className="project__card" key={key}>
      <div className="project__thumbnail">
        <img src={image} alt={title} className="project__img" />
        <div className="project__mask"></div>
      </div>

      <span className="project__category">{category}</span>
      <h3 className="project__title">{title}</h3>
      <a href={link} className="project__button">
        <i className="fa fa-link project__button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectCard;
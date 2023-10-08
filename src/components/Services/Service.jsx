import "./Service.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faLaptopCode, faGamepad } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="services" id="services">
      <h2>My Services</h2>
      <div className="service-container">
        <div className="service-box" style={{ backgroundColor: '#007acc' }}>
          <FontAwesomeIcon icon={faPalette} className="icon" />
          <h3>UI/UX Design</h3>
          <p>
            I create stunning user interfaces and delightful user experiences.
          </p>
        </div>
        <div className="service-box" style={{ backgroundColor: '#4caf50' }}>
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Frontend Development</h3>
          <p>
            I craft responsive and interactive web apps using the latest technologies.
          </p>
        </div>
        <div className="service-box" style={{ backgroundColor: '#f57c00' }}>
          <FontAwesomeIcon icon={faLaptopCode} className="icon" />
          <h3>FullStack App Development</h3>
          <p>
            I build end-to-end solutions, from the server to the client.
          </p>
        </div>
        <div className="service-box" style={{ backgroundColor: '#9c27b0' }}>
          <FontAwesomeIcon icon={faGamepad} className="icon" />
          <h3>Python Game Development</h3>
          <p>
            I create fun and engaging 2D games using Python and pygame.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
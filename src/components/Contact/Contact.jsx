import "./Contact.css";
import Lottie from "lottie-react";
import ContactIllustration from "../../assets/Contact.json";

function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <h3 className="heading">Get In Touch!</h3>
        <p className="text">Got An Idea?, Send Me A Message</p>
        <form action="#">
          <div className="inputBox">
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="inputBox">
            <textarea
              name="message"
              className="message"
              placeholder="Enter your message..."
            >
            </textarea>
          </div>
          <button className="btn" id="btn">Send!</button>
        </form>
      </div>
      <div className="right">
        <div className="illustration">
          <Lottie animationData={ContactIllustration} className="contact-animation" />
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/supermarios77">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;

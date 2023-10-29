import "./Contact.css";
import Lottie from "lottie-react";
import ContactIllustration from "../../assets/Contact.json";

function Contact() {
  return (
    <div className="contact container section">
      <div className="left">
        <h3 className="section__title heading">Get In Touch!</h3>
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
          <a href="mailto:supermdev7@gmail.com" className="btn" id="btn">Send!</a>
        </form>
      </div>
      <div className="right">
        <div className="illustration">
          <Lottie animationData={ContactIllustration} className="contact-animation" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
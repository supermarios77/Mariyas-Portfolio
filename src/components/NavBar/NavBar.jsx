import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faHome,
  faBlog,
  faAddressCard,
  faEnvelope,
  faBox,
  faPalette,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import backgroundMusic from "../../assets/BG-Music.mp3";
import "./NavBar.css";

const NavBar = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        // Autoplay was blocked; handle the error here.
        console.error("Autoplay blocked:", error);
      });
    }

    setMusicPlaying(!musicPlaying);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className="nav-item">
          <a href="/">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/blog">
            <FontAwesomeIcon icon={faBlog} />
            <span>Blog</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about">
            <FontAwesomeIcon icon={faAddressCard} />
            <span>About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects">
            <FontAwesomeIcon icon={faBox} />
            <span>Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#services">
            <FontAwesomeIcon icon={faPalette} />
            <span>Services</span>
          </a>
        </li>
      </ul>
      <button
        className={`music-button ${musicPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        {musicPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <audio ref={audioRef} src={backgroundMusic} loop />
    </nav>
  );
};

export default NavBar;

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBars } from "@fortawesome/free-solid-svg-icons";
import backgroundMusic from "../../assets/BG-Music.mp3";
import "./NavBar.css";

const NavBar = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
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

  return (
    <div className="container">

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

    </div>
  );
};

export default NavBar;
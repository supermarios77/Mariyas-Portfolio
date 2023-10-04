import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import HomePage from "./components/Home/HomePage.jsx";
import backgroundMusic from "./assets/BG-Music.mp3";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {
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
    <div>
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
      </div>

      {/* Create an audio element with the ref */}
      <audio ref={audioRef} src={backgroundMusic} loop />

      <HomePage />
      <About />
      <Skills />
    </div>
  );
}

export default App;

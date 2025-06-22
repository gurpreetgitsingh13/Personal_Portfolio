import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onFinish }) => {
  const fullText = 'Hello_World !';
  const speed = 150;
  const [displayedChars, setDisplayedChars] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedChars([...fullText.slice(0, index + 1)]);
        index++;
      } else {
        clearInterval(interval);
        setShowHint(true);

        const proceed = () => {
          setFadeOut(true);
          setTimeout(() => {
            onFinish();
          }, 800); // allow fade out before switching
          window.removeEventListener('click', proceed);
          window.removeEventListener('keydown', proceed);
        };

        window.addEventListener('click', proceed);
        window.addEventListener('keydown', proceed);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`intro-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div>
        <h1 className="type">
          {displayedChars.join('')}
          <span className="blinking">|</span>
        </h1>
        {showHint && <p className="hint-fade">Click anywhere or press any key</p>}
      </div>
    </div>
  );
};

export default Intro;

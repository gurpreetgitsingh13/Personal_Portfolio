import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onFinish }) => {
  const fullText = 'Hello_World !';
  const speed = 150;
  const [displayedChars, setDisplayedChars] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedChars([...fullText.slice(0, index + 1)]);
        index++;
      } else {
        clearInterval(interval);

        const proceed = () => {
          onFinish();
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
    <div className="intro-screen">
      <h1 className="type">{displayedChars.join('')}<span className="blinking">|</span></h1>
    </div>
  );
};

export default Intro;

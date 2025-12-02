import { useState, useEffect } from 'react';
import {format} from 'date-fns';
import './App.css';
import './index.css';

function App() {
  const [glowColor, setGlowColor] = useState(null);
  const [now, setNow] = useState(new Date());

  //Define use effect to set the clock to update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //Define constant to generate a random color
  const randomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  //Define constant to set the glow color to the random color
  const handleGlow = () => {
    setGlowColor(randomColor());
  };

  return (
    <div className="container">
        <button onClick={handleGlow}>Change Glow</button>
        <p className="clock" style={glowColor ? {boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`, transition: 'box-shadow 0.3s ease-in-out'} : {}}>
        {format(now, 'yyyy-MM-dd h:mm:ss aaa')}
        </p>
    </div>
  );
};

export default App
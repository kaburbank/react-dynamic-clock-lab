import {format} from "date-fns";
import "./App.css";
import {useState, useEffect} from "react";

function App(){
  //Define a state to hold time and date
  const [currentTime, setCurrentTime] = useState(new Date());

  //Define use effect to update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="clock">
    {format (currentTime, "MMMM do yyyy, h:mm:ss a")}
    </p>
  );
};

export default App;
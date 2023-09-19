import { useState, useEffect } from "react";
import "./Thermometer.css";

const Thermometer = () => {
  const [temp, setTemp] = useState(0);
  const [classColor, setClassColor] = useState(""); // Poprawiona nazwa zmiennej

  useEffect(() => {
    changeTemp();
  }, [temp]);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  const changeTemp = () => {
    if (temp >= 6 && temp < 12) {
      setClassColor("light-green");
    } else if (temp >= 12 && temp < 18) {
      setClassColor("green");
    } else if (temp >= 18 && temp < 23) {
      setClassColor("temp23");
    } else if (temp >= 23 && temp < 28) {
      setClassColor("temp28");
    } else if (temp >= 28 && temp < 33) {
      setClassColor("temp33");
    } else if (temp >= 33 && temp < 38) {
      setClassColor("temp38");
    } else if (temp >= 38 && temp < 43) {
      setClassColor("temp43");
    } else if (temp >= 43 && temp < 65) {
      setClassColor("temp65");
    } else {
      setClassColor("");
    }
  };

  return (
    <div className="thermometer">
      <p className={`temp ${classColor}`}> {temp}°C</p>
      <div className="button">
        <button className="btn plus" onClick={increaseTemp}>
          +
        </button>
        <button className="btn minus" onClick={decreaseTemp}>
          -
        </button>
      </div>
    </div>
  );
};

export default Thermometer;

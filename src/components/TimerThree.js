import React, { Component, useState, useEffect } from "react";
import "../App.css";

export default function TimerThree() {
  const [seconds, setSeconds] = useState(50);
  const [isActive, setIsActive] = useState(true);
  const [Class, setClass] = useState("none");

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(40);
    setIsActive(false);
  }

  //Zéro devant quand seconds < 10
  function leadingZero(number) {
    return number < 10 ? "0" + number : number;
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds == 0) {
        setIsActive(false);
      } else {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
          if (seconds <= 40 && seconds > 20) {
            setClass("blue");
          } else if (seconds <= 20 && seconds > 12) {
            setClass("orange");
          } else if (seconds <= 12 && seconds >= 0) {
            setClass("red");
          }
        }, 1000);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className={Class}>{leadingZero(seconds)}</div>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

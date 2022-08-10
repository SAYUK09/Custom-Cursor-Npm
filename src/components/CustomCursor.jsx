import React from "react";
import "./customCursor.css"
import { useEffect, useState } from "react";

const CustomCursor=() =>{
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [animation, setAnimation] = useState(false);
  console.log(position,"psss")

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    });
  }, []);

  useEffect(() => {
    const mouseClickHandler = () => {
      setAnimation(true);
      const timeOutId = setTimeout(() => {
        setAnimation(false);
      }, 100);
      return () => clearTimeout(timeOutId);
    };
    document.addEventListener("click", mouseClickHandler);

    return () => {
      document.removeEventListener("click", mouseClickHandler);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ring ${animation ? "animate" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="cursor dot"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}


export default CustomCursor;
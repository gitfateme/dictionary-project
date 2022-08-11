import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div className="Phonetics">
      {props.phonetics.map((phonetic, index) => {
        return (
          <div key={index}>
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
            <span>{phonetic.text}</span>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div className="Phonetics">
      {props.phonetics.map((phonetic, index) => {
        return (
          <div key={index}>
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              listen
            </a>
            <span>{phonetic.text}</span>
          </div>
        );
      })}
    </div>
  );
}

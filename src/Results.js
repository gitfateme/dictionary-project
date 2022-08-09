import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results text-center">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results ">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

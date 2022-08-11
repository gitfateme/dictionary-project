import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              <strong>Difinition: </strong>
              {definition.definition}
            </p>
            <p>
              <em>
                <strong>Example: </strong>
                {definition.example}
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

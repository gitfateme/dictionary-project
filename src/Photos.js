import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-sm-6 col-md-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" alt={photo.alt}/>
                </a>
              </div>
            );
          })}
          <a href="https://www.pexels.com">Photos provided by Pexels</a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}

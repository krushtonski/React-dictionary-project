import React from "react";
import "./Photos.css";

// Receiving the photos
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-12 col-md-4" key={index}>
                <a href={photo.src.original} target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt="images"
                    key={index}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
    // If there are no photos we are returning "null"
  } else {
    return null;
  }
}

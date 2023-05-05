import React from "react";
import JobButton from "./Button";
import "../style/Banner.css";
import InputData from "./inputData";

function Banner() {
  return (
    <>
      <div className="table">
        <JobButton judul="Marketing Planner" job="See Job" />
        <JobButton judul="UI/UX Content Planner" job="See Job" />
        <JobButton judul="HR/Legal Manager" job="See Job" />
        <JobButton judul="UI/UX Content Writer" job="See Job" />
        <JobButton judul="UI/UX Designer" job="See Job" />
        <JobButton judul="Java Spring Boot" job="See Job" />
      </div>
      <div className="containerContent">
        <h1>Marketing Planner</h1>
        <div>
          <h3>Job Description:</h3>
          <ul>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui. In qui nulla sint proident est anim ex dolor
              anim exercitation fugiat duis. Aute ex aliquip irure dolore eu
              incididunt.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui. In qui nulla sint proident est anim ex dolor
              anim exercitation fugiat duis. Aute ex aliquip irure dolore eu
              incididunt.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui. In qui nulla sint proident est anim ex dolor
              anim exercitation fugiat duis. Aute ex aliquip irure dolore eu
              incididunt.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui. In qui nulla sint proident est anim ex dolor
              anim exercitation fugiat duis. Aute ex aliquip irure dolore eu
              incididunt.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui. In qui nulla sint proident est anim ex dolor
              anim exercitation fugiat duis. Aute ex aliquip irure dolore eu
              incididunt.
            </li>
          </ul>
          <h3>Skill</h3>
          <ul>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui.
            </li>
            <li>
              Cillum aute enim excepteur dolor ut esse deserunt minim
              exercitation qui.
            </li>
          </ul>
          <div className="form d-flex">
            <InputData name="Your Name" place="Your Name" />
            <InputData name="email Address" place="email Address" />
            <InputData name="Mobile Number" place="Mobile Number" />
            <InputData name="Write your massage here..." place="Write your massage" />
          </div>
          <div className="Sending btn btn-success btn-sm rounded-pill">
            Send Message
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

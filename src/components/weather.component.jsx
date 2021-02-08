import React from "react";
import Form from "./form.component";

const Weather = (props) => {
  return (
    <div className="text-center mt-5">
      <h1>ClimApp</h1>
      <div className="container  d-flex justify-content-center">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <img
            src="https://images.unsplash.com/photo-1576786553390-52545737511f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            className="card-img-top rounded-sm"
          />
          <div className="card-body">
            <h4>{props.city}</h4>
            <h5 className="card-title">
              <i className={`wi ${props.weatherIcon} display-1`}></i>
            </h5>
            {props.temp_celsius ? (<h3 className="card-text">{props.temp_celsius}&deg;</h3>): null}
            <span className="dat">
              {minmaxTemp(
                props.temp_min,
                props.temp_max
              )}
            </span>
            <h5 className="py-3">{props.description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">Min {min}&deg;</span>
        <span className="px-4">Max {max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;

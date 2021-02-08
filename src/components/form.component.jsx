import React from "react";

const Form = (props) => {
  return (
    <div className="container">
        <div>{props.error ? error(): null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control-plaintext"
              name="city"
              autoComplete="off"
              placeholder="Ciudad"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control-plaintext"
              name="country"
              autoComplete="off"
              placeholder="País"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md mt-3">
            <button className="btn btn-warning">Obtener</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Ingrese Ciudad y País
        </div>
    );
}

export default Form;

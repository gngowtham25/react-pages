import React from "react";

const Banner = () => {
  return (
    <div className="jumbotron p-4">
      <h1 className="display-4">Products</h1>
      <p className="lead"><strong>This is our React Project</strong></p>
      <hr className="my-4" />

      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Banner;

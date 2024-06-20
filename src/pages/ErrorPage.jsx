import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      An Error ocurred.
      <Link to="/">
        <h5>Try another residence</h5>
      </Link>
    </div>
  );
};

export default ErrorPage;

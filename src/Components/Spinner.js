import React, { Component } from "react";
import loader from "./loader.gif";
export class Loader extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <img src={loader} alt="Loading" />
        </div>
      </div>
    );
  }
}

export default Loader;

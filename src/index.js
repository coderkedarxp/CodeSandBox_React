// var React = require("react");
// var ReactDOM = require("react-dom");

// OR

import React from "react";
import ReactDOM from "react-dom";
// ReactDOM.render(What to show, where to show)

// render can take only 1 at a time therefore we need to take them both in the <Div>
ReactDOM.render(
  <div>
    <h1> Help me with this please </h1> <p>This is the paragraph </p>
  </div>,
  document.getElementById("root")
);

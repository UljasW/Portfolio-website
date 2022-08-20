import React from "react";
import './Widget.css';


function HorizontalWidget(props) {
  return (
    <div className="LargeSize">
      <h1>{props.title}</h1>
      <h2>{props.secondary}</h2>
      <h2>{props.third}</h2>
    </div>
  );
}

export default HorizontalWidget;
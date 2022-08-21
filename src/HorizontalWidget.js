import React from "react";
import './Widget.css';


function HorizontalWidget(props) {
  return (
    <div className="LargeSize">
      <h1>{props.title}</h1>
      <p>{props.secondary}</p>
      <p>{props.third}</p>
    </div>
  );
}

export default HorizontalWidget;
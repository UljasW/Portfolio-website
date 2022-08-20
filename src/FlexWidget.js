import React from "react";
import './Widget.css';


function FlexWidget(props) {
  return (

    <div className="SmallSize">
        <h1>{props.title}</h1>
        {props.secondary}
        <h2>{props.third}</h2>
    </div>

  );
}

export default FlexWidget;
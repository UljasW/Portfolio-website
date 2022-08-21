import React from "react";
import './Widget.css';


function FlexWidget(props) {
  return (

    <div className="SmallSize">
        <h1>{props.title}</h1>
        {props.secondary}
        <p>{props.third}</p>
    </div>

  );
}

export default FlexWidget;
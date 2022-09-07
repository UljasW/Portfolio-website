import React from "react";
import './Widget.css';


function FlexWidget(props) {
  return (

    <div className="SmallSize">
        <h1 className="margin">{props.title}</h1>
        {props.secondary}
        <p style={{margin: "1rem 0rem"}}>{props.third}</p>
    </div>

  );
}

export default FlexWidget;
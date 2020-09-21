import React from 'react';
import Ball from "./8-Ball.png";

function Magic8Ball(props) {
    if (props.output === "") {
        return null;
    }
    return(
        <div className="Pad">
            <div className="containeri">
                <img src={Ball} id="img" alt=""/>
                <div className="centered">{props.output}</div>
            </div>
        </div>
    )
}

export default Magic8Ball;
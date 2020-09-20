import React from 'react';

function Magic8Ball(props) {
    if (props.output === "") {
        return null;
    }
    return(
        <div className="Pad">
            <div className="containeri">
            <img src="https://spaces.profoundjs.com/ide/bernice/magic-8-ball-app/public/8-Ball.png" id="img" alt=""/>
            <div className="centered">{props.output}</div>
            </div>
        </div>
    )
}

export default Magic8Ball;
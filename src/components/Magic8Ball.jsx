import React from 'react';

function Magic8Ball(props) {
    if (props.output === "") {
        return null;
    }
    return(
        <div id="Card" className="Card">
            <h2>{props.output}</h2>
        </div>
    )
}

export default Magic8Ball;
import React, { Component } from 'react';
import Replies from "./Replies.js";
import Magic8Ball from "./Magic8Ball.jsx";
import "./style.css";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            output: "",
            dmode: false
        }
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        const replies = Replies;
        const i = replies.sort(() => Math.random() - 0.5);
        this.setState({
            output: i[0]
        })

        console.log(this.state.output)

        e.preventDefault();
    }
    render() { 
        return ( 
            <div>
                <div id="Card" className="Card Cardmode">
                    <form onSubmit={this.submit}>
                        <h1>Ask the Magic 8 Ball anything.</h1>
                        <input 
                            type="text" 
                            id="input"
                            className="Inputmode"
                            autoComplete="off"
                            placeholder="Ask.."
                        />
                    </form>
                </div>
                <br/>
                <Magic8Ball output={this.state.output}/>
            </div>
         );
    }
}
 
export default Input;
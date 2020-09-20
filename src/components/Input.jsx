import React, { Component } from 'react';
import Replies from "./Replies.js";
import Magic8Ball from "./Magic8Ball.jsx";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            output: "",
            dmode: false
        }
        this.submit = this.submit.bind(this);
        this.dmode = this.dmode.bind(this);
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
    dmode() {
        const dmode = this.state.dmode;
        document.body.classList.toggle("dmode");
        document.getElementById("Card").classList.toggle("Cardmode");

        localStorage.setItem("dmode", "true")
    }
    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }  
    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
            console.log("value = " + value);
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
              console.log('intry')
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
              console.log('incatch')
            }
          }
        }
      }
    render() { 
        if (this.state.dmode === true) {
            document.body.classList.add("dmode");
            document.getElementById("Card").classList.add("Cardmode");
        }
        return ( 
            <div>
                <div id="Card" className="Card">
                    <form onSubmit={this.submit}>
                        <h1>Ask the Magic 8 Ball anything.</h1>
                        <input 
                            type="text" 
                            id="input"
                            autoComplete="off"
                            placeholder="Ask.."
                        />
                    </form> 
                    <button onClick={this.dmode}>Dark Mode</button>
                </div>
                <br/>
                <Magic8Ball output={this.state.output}/>
            </div>
         );
    }
}
 
export default Input;
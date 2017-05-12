import React, { Component } from "react";
import { translate } from "../utilities/pig-latin";
import "./css/App.css";

/**
 * @class
 */
class App extends Component {

    /**
     * Sets up the initial state and binds the functions to the component instance.
     * 
     * @constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            translation: ""
        };
        this.translate = this.translate.bind(this);
    }

    /**
     * Translates the content entered into the textarea and updates the state with the
     * latest translation.
     * 
     * @instance
     */
    translate() {
        this.setState({
            translation: translate({ text: this.textInput.value })
        })
    }

    /**
     * Renders the component.
     * 
     * @instance
     * @returns {JSX}
     */
    render() {
        return (
            <section className="kits_App">
                <h1 className="kits_App__text">Pig Latin Translator</h1>

                <span id="inputInfo"
                      className="kits_App__text">Enter text to translate into Pig Latin</span>

                <textarea ref={(node) => {this.textInput = node}}
                          aria-describedby="inputInfo"/>

                <button className="kits_App__button"
                        onClick={this.translate}>Translate</button>

                <span id="outputInfo"
                      className="kits_App__text">Pig Latin Translation</span>
                      
                <p aria-describedby="outputInfo">{this.state.translation}</p>
            </section>
        );
    }
}

export default App;

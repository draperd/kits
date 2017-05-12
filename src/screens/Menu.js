import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./css/Menu.css";

class Menu extends Component {
    render() {
        return (
            <ul className="kits-screens-Menu">
                <li className="kits-screens-Menu__link">
                    <a className="kits-screens-Menu__link__text" href="https://linkedin.com/in/dave-draper-3b214621">LinkedIn</a>
                </li>
                <li className="kits-screens-Menu__link">
                    <a className="kits-screens-Menu__link__text" href="https://medium.com/">Medium</a>
                </li>
                <li className="kits-screens-Menu__link">
                    <Link className="kits-screens-Menu__link__text" to="/app">Application</Link>
                </li>
            </ul>
        );
    }
}

export default Menu;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,
         Route } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"


import Menu from "./screens/Menu";
import App from "./screens/App";
import "./index.css";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
          <Route exact path="/" component={Menu}/>
          <Route path="/Menu" component={Menu} />
          <Route path="/App" component={App} />
        </div>
    </Router>,
  document.getElementById("root")
);

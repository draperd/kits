import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { mount } from "enzyme";
import Menu from "../../src/screens/Menu";

let wrapper;

beforeEach(() => {
    
});

afterEach(() => {
    wrapper && wrapper.unmount();
});

it("renders without crashing", () => {
    wrapper = mount(
        <Router>
            <Menu />
        </Router>
    );
});

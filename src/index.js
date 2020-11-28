import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./index.css";
import Home from "./scenes/Home";
import Header from "./components/header/Header"


const App = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/"
                       component={Home}
                />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(<App/>, document.getElementById('root'));

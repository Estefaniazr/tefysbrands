import React from 'react';
import {Link} from "react-router-dom";
import "./Button.scss";

const Button = ({text}) => (
    <div className="button-container">
        <Link className="button-content" to="/">
            <div className="button-text">{text.toUpperCase()}</div>
        </Link>
    </div>
);

export default Button;
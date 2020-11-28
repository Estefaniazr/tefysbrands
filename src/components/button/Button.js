import React from 'react';
import {Link} from "react-router-dom";
import "./Button.scss";

const Button = () => (
    <div className="button-container">
        <Link className="button-content" to="/">
            <div className="button-text">¡CUÉNTAME MÁS!</div>
        </Link>
    </div>
);

export default Button;
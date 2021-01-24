import React from 'react';
import Button from "../button/Button";
import "./Intro.scss";

const Intro = () => (
    <div className="intro-external">
        <div className="intro-internal">
            <div className="intro-container">
                <div className="intro-subtitle">
                    Branding and Web Design
                </div>
                <div className="intro-title">
                    Creamos el branding que conecta contigo
                </div>
                <Button text="¡Cuéntame más!"/>
            </div>
        </div>
    </div>
);

export default Intro;
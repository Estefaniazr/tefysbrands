import React from 'react';
import Button from "../button/Button";
import "./Intro.scss";

const Intro = () => (
    <div className="external">
        <div className="internal">
            <div className="intro-container">
                <div className="subtitle">
                    Branding and Web Design
                </div>
                <div className="title">
                    Creamos el branding que conecta contigo
                </div>
                <Button/>
            </div>
        </div>
    </div>
);

export default Intro;
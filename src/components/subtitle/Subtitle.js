import React from 'react';
import "./Subtitle.scss";

const Subtitle = ({text}) => (
    <div className="subtitle-container">
        <div className="subtitle-line"/>
        <div className="subtitle-text">{text.toUpperCase()}</div>
    </div>
);

export default Subtitle;
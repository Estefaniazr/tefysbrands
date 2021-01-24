import React from 'react';
import "./Info.scss";
import Subtitle from "../subtitle/Subtitle";
import ArrowLink from "../arrowLink/ArrowLink";

const Info = ({title, text, info}) => (
    <div className="info-container">
        <Subtitle text={text}/>
        <div className="info-title">{title}</div>
        <div className="info-text">{info}</div>
        <ArrowLink
            hasLink={false}
            link="mailto:tefysbrands@gmail.com"
            text="hey@tefysbrand.com"
        />
    </div>
);

export default Info;
import React from 'react';
import {arrow1} from "resources";
import {Link} from "react-router-dom";
import "./ArrowLink.scss"

const ArrowLink = ({hasLink, link, text}) => (
    <>
        {hasLink ? (
            <Link to={link} className="arrowLink-container">
                <div className="arrowLink-content">
                    <div className="arrowLink-text">
                        {text}
                    </div>
                    <div className="arrowLink-arrow">
                        <img src={arrow1} alt="arrow"/>
                    </div>
                </div>
            </Link>
        ) : (
            <a href={link} className="arrowLink-container">
                <div className="arrowLink-content">
                    <div className="arrowLink-text">
                        {text}
                    </div>
                    <div className="arrowLink-arrow">
                        <img src={arrow1} alt="arrow"/>
                    </div>
                </div>
            </a>
        )}

    </>
);

export default ArrowLink;
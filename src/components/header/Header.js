import React from 'react';
import {
    Link
} from "react-router-dom";
import {whiteLogoSvg} from "resources";
import "./Header.scss";

const Header = () => (
    <div className="header-internal">
        <div className="header-container">
            <div className="logo">
                <Link to="/"><img src={whiteLogoSvg} alt="Logo"/></Link>
            </div>
            <div className="menu-nav">
                <div className="menu-content">
                    <div className="header-button">
                        Home
                    </div>
                    <div className="header-button">
                        Nuestros Servicios
                    </div>
                    <div className="header-button">
                        Portfolio
                    </div>
                    <div className="header-button">
                        Quienes somos
                    </div>
                    <div className="header-button">
                        Contacto
                    </div>
                    <div className="header-button">
                        ES/EN
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
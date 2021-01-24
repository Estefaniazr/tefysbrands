import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from 'reactstrap';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import "./Header.scss";
import {whiteLogoSvg} from "resources";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        if (window.innerWidth <= 770)
            setIsOpen(!isOpen);
    };
    return (
        <div className="header-container">
            <div className="navbar-container">
                <Navbar expand="lg"
                        dark
                >
                    <NavItem style={{listStyle: "none"}}>
                        <NavLink className="nav-link"
                                 exact
                                 to="/"
                                 onClick={toggle}
                        >
                            <img className="logo" src={whiteLogoSvg} alt="Logo"/>
                        </NavLink>
                    </NavItem>
                    <NavbarToggler onClick={toggle}
                                   value="button"
                                   aria-label="menu"
                    />
                    <Collapse isOpen={isOpen}
                              navbar
                              style={isOpen ? {
                                  backgroundColor: "#000000",
                                  paddingLeft: '1rem'
                              } : ""}
                    >
                        <Nav className="ml-auto"
                             navbar
                        >
                            <NavItem>
                                <NavLink className="nav-link"
                                         exact
                                         to="/"
                                         onClick={toggle}
                                >
                                    <span className="items">HOME</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                         to="/"
                                         onClick={toggle}
                                >
                                    <span className="items">NUESTROS SERVICIOS</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                         to="/"
                                         onClick={toggle}
                                >
                                    <span className="items">PORTFOLIO</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                         to="/"
                                         onClick={toggle}
                                >
                                    <span className="items">QUIENES SOMOS</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                         to="/"
                                         onClick={toggle}
                                >
                                    <span className="items">CONTACTO</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link language-container"
                                         to="/"
                                         onClick={toggle}
                                >
                                    <span className="language">ES</span>/
                                    <span className="language">EN</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;

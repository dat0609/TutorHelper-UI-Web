import React from 'react';
import logo from "../asset/image/logo.png"
import "../style/Header/Header.scss"
const Header = () => { 
    return(
        <div className="image">
            <h3>Tutor Helper</h3>
            <img src={logo} alt="Logo" width="50p" height="40px"/>
        </div>
    );
};

export default Header;

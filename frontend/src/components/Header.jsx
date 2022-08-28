import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="./img/logo512.png" alt="logo"/>
            </div>
            <div className="title">
                <h1>Tuto React</h1>
            </div>
            <div className="login">
                <Button name="Login"/>
            </div>
        </header>
    );
};
export default Header;
//<input class="btn-login" type="button" value="Login"/>
//  <!--input type="button">Login</input-->
import React from 'react';
import { NavLink } from 'react-router-dom';
//import {Menu} from 'antd';

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <NavLink exact to="/" activeClassName="nav-active">
                    Home
                </NavLink>
                <NavLink exact to="about" activeClassName="nav-active">
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
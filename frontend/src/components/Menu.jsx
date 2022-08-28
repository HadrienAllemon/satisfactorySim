import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import User from "../assets/icons/anonymousUser.svg";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <div className="menu">
            <div className="title">
                <img src={Logo} alt="logo"/>
                <h1>Factory Manager</h1>
            </div>
            <div className="links">
                <Item to="/" icon="fas fa-home" title="Home"/>
                <Item to="/factory" icon="fas fa-industry" title="Factory"/>
                <Item to="/transport" icon="fas fa-subway" title="Transport"/>
            </div>
            <div className="user">
                <div className="detail">
                    <img src={state.user ? User : "./logo192.png"} alt="profile"/>
                    <div className="info">
                        <div className="username">{state.user ? state.user : ''}</div>
                        <div className="role">{state.role ? state.role : ''}</div>
                    </div>
                </div>
                <div className="logout">
                    {state.user ? 
                        <i className="fas fa-sign-out-alt" onClick={() => dispatch({type: "logout"})}/> :
                        <i className="fas fa-sign-in-alt" onClick={() => navigate("/login")} />
                    }
                </div>
            </div>
        </div>
    )
};

const Item = (props) => {
    return (
        <NavLink to={props.to}>
            <div className="icon">
                <i className={props.icon} />
            </div>
            <h2>
                {props.title}
            </h2>
        </NavLink>
    )
}
export default Menu;
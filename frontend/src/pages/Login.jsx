import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const Login = () => {

    const {state, dispatch} = useContext(UserContext)

    const [error, setError] = useState(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = () => {
        console.log("Login");
        dispatch({
            type: 'login',
            username: username,
            password: password
        })
        console.log(state.user)
        if (state.user != null){
            navigate(-1);
        } else {
            setError("Wrong username or password");
        }        
    }

    const cancel = () => {
        navigate(-1);
    }

    

    return (
        <div className="login">
            <div className="form">
                <h1 id="title">User Login</h1>
                <div id="username">
                    <i className="fas fa-user"/>
                    <input value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div id="password">
                    <i className="fas fa-lock"/>
                    <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                    {/* TODO: add show/hide password */}
                </div>
                {error ? <label id="error">{error}</label> : ''}
                <button id="cancel" onClick={() => cancel()}>Cancel</button>
                <button id="login" onClick={() => login()}>Login</button>
            </div>
        </div>
    )
};

export default Login;
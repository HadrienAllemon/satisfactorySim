import React from "react";


// Initial state, if we find information about the current user in the session storage
// TODO: check the validity of the token
const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')),
    role: JSON.parse(sessionStorage.getItem('role')),
    refreshToken: JSON.parse(sessionStorage.getItem('refreshToken')), 
    accessToken: JSON.parse(sessionStorage.getItem('accessToken'))
}

// Create the context
const UserContext = React.createContext({
    state: initialState,
    dispacth: () => {}
})

// change the context state function
function UserReducer(state = initialState, action){
    //new Promise(r => setTimeout(r, 1000));
    switch(action.type) {
        case 'login':
            console.log("Call to AAA server");
            // TODO: call the AAA server and extract information
            let role = 'Dev'
            let refreshToken = "rt"
            let accessToken = "at"
            let user = action.username;
            if (action.username === "test" && action.password === "test"){
                sessionStorage.setItem('user', JSON.stringify(action.username));
                sessionStorage.setItem('role', JSON.stringify(role));
                sessionStorage.setItem('refreshToken', JSON.stringify(refreshToken));
                sessionStorage.setItem('accessToken', JSON.stringify(accessToken));
            } else {
                role = null;
                user = null;
                refreshToken = null;
                accessToken = null;
            }
            return {
                role: role,
                user: user,
                refreshToken: refreshToken,
                accessToken: accessToken
            }
        case 'logout':
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('role');
            sessionStorage.removeItem('refreshToken');
            sessionStorage.removeItem('accessToken');
            return {
                role: null,
                user: null,
                refreshToken: null,
                accessToken: null
            }
        case 'refresh':{
            console.log("Call the AAA server to refresh access and refresh token");
            let refreshToken = "rt-refresh";
            let accessToken = "at-refresh";
            sessionStorage.setItem('refreshToken', JSON.stringify(refreshToken));
            sessionStorage.setItem('accessToken', JSON.stringify(accessToken));

            return {
                ...state,
                refreshToken: refreshToken,
                accessToken: accessToken
            }
        }
        default:
            return state;
    }
}

function UserProvider({children}) {
    const [state, dispatch] = React.useReducer(UserReducer, initialState);

    const value = {state, dispatch}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}
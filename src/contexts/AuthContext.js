// import React, { useEffect, useReducer, useState } from 'react';
// import { AUTH_API } from '../helpers/constants';
// import axios from 'axios';
// export const authContext = React.createContext();

// const INIT_STATE = {}

// const reducer = (state=INIT_STATE, action) => {
//     switch(action.type){
//         default: return state
//     }
// }

// const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, INIT_STATE)
//     const [currentUser, setCurrentUser] = useState(null);


// useEffect(() => {
//     app.auth().onAuthStateChanged(setCurrentUser);

// }, []);

//     return (
//         <authContext.Provider value={{
//             currentUser
//         }}>
//             {children}
//         </authContext.Provider>
//     )
// };

// export default AuthContextProvider;
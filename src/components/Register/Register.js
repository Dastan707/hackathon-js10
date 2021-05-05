import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import './Register.css'


const Register = () => {
    const { registerUser } = useContext(authContext);
    const history = useHistory();

    let newUser = {
    };

    function handleInputs(event) {
        newUser = {
            ...newUser,
            [event.target.name]: event.target.value
        }
    }
    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form onSubmit={(event) => registerUser(event, newUser, history)}>
                    <h3>Register</h3>
                        <input
                        onChange={handleInputs} 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="email" 
                        />
                        <input 
                        onChange={handleInputs} 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="password" 
                        />
                        <button type="submit" > Register </button>                    
                    </form>
                        <Link to='/login'>
                        <p className="message">Already registered? Sign In</p>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
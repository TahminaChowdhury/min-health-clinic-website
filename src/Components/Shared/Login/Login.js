import React, { useState } from 'react';
import './Login.css'
import useAuth from '../../../Hooks/useAuth'
import img from '../../../images/mobile-login-concept-illustration_114360-83.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    const {error,signinWithGoogle, handleEmail, handlePassword, handleLogin} =useAuth();

    return (
        <div className="d-flex justify-content-center">
                <div>
                    <img src={img} alt=""/>
                </div>
            <div className="login">
                <h1>Log in</h1>
                <br />
                <form onSubmit={handleLogin}>
                    <label htmlFor="">E-mail</label>
                    <br />
                    <input onBlur={handleEmail} type="email" name="email" id="" required className="w-75 py-2 mb-3"/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input onBlur={handlePassword} type="password" name="password" id=""
                    required className="w-75  py-2"/>
                    <br />
                    <p>Forgot password ?</p>
                    <h5 className="text-danger my-3">{error}</h5>
                    <button className="btn btn-primary rounded-pill w-75 mt-5">Log in</button>
                </form>
                <span >or login using</span>
                <button onClick={signinWithGoogle} className="btn  btn-outline-primary rounded-pill px-5 mt-3">Log in with Google</button>

                <div className="mt-5 ">
                    <span>Don't have an acoount ?</span><Link  to="/signup" className="">Sign-up here</Link> 
                </div>
            </div>
                    
            
        </div>
    );
};

export default Login;
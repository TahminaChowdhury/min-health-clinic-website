import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import img from '../../../images/login-page.jpg'

const Login = () => {
    const {error,signinWithGoogle, handleEmail, handlePassword, handleLogin} =useAuth();

    return (
        <div className="text-center">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>Log in</h1>
                <br />
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder="Email" required/>
                    <br /> <br />
                    <input onBlur={handlePassword} type="password" name="password" id="" placeholder="password"
                    required/>
                    <br />
                    <p>{error}</p>
                    <input type="submit" value="Login" />
                </form>
                <button onClick={signinWithGoogle} className="btn btn-outline-dark rounded-pill px-5 mt-3">Log in with Google</button>
            </div>
        </div>
    );
};

export default Login;
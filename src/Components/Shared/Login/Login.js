import React, { useState, useHistory, useLocation } from 'react';
import './Login.css'
import useAuth from '../../../Hooks/useAuth'
import img from '../../../images/mobile-login-concept-illustration_114360-83.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    const {user,error,signinWithGoogle, handleEmail, handlePassword, handleResetPassword,handleLogin, signInWithFacebook} =useAuth();
    

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
                    <button className="btn text-primary" onClick={handleResetPassword}>Forgot Password?</button>

                    <h5 className="text-danger my-3">{error}</h5>

                    <button className="btn btn-primary rounded-pill w-75 mb-4">Log in</button>
                </form>
                <span className="ms-5 ps-5">or login using</span>
                {/* sign in with social media */}
                <div className="d-flex">
                    {/* google sign in */}
                    <div className="google-signin">
                        <button onClick={signinWithGoogle} className="btn btn-primary px-3 mt-3"><span className="fs-4"><i class="fab fa-google " ></i></span></button>
                    </div>
                    <div>
                        {/* facebook sign in */}
                    <div className="ms-3">
                        <button onClick={signInWithFacebook} className="btn  btn-primary px-3 mt-3"><span className="fs-4"><i class="fab fa-facebook-f"></i></span></button></div>
                    </div>
                </div>

                <div className="mt-5 ">
                    <span>Don't have an acoount ?</span><Link  to="/signup" className="text-primary">Sign-up here</Link> 
                </div>
            </div>
                    
            
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Signup = () => {
    const {error, handleEmail, handlePassword, handleSignup} =useAuth();
    return (
        <div className="text-center">
            <div>
                <h1>Sign up</h1>
                <form  onSubmit={handleSignup}>
                    <input type="text" />
                    <br /> <br />
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder="Type your email" required/>
                    <br /> <br />
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder="Type your password" required/>
                    <br /> <br />
                    <p>{error}</p>
                    <input type="submit" value="Sign-up" />
                </form>
            </div>
        </div>
    );
};

export default Signup;
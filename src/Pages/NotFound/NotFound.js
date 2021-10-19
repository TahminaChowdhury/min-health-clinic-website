import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg'

const NotFound = () => {
    return (
        <div className="text-center h-100">
            <img src={img} alt="" />
        <div>
            <Link to="/home">
            <button className="btn text-light rounded-pill btn-primary mb-5 px-4">Go to home</button>
            </Link>
        </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark py-3 text-center">
            <div className="ps-5 d-flex justify-content-around ">
            <div className="text-start">
                <h4 className="text-light"><span className="fs-1 text-primary"> Mind </span>Health Clinic</h4>
                <p className="text-white">You don’t have to <br /> control your thoughts. <br /> You just have to stop letting them control you. </p>
            </div>
            <div className="text-white text-start">
                <ul>
                    <li><Link to="/home" >Dpression Treatment</Link></li>
                    <Link to="/home" >Anxiety Counselling</Link>
                    <li><Link to="/home" >Personal Development</Link></li>
                    <li><Link to="/home" >Couples Counselling</Link></li>
                    <li><Link to="/home" >Stress-Related Disorders Treatment</Link></li>
                    <li><Link to="/home" >Eating Disorders Disorders Treatment</Link></li>
                </ul>
            </div>
            <div className="text-white pe-5 text-start py-4">
                <p>Contact-Info</p>
                <p><i class="far fa-envelope"></i>        Email:mindhealthclinic@gmail.com</p>
                <p><i class="fas fa-phone-alt"></i> Call us: 01755-555-80</p>
                <p><i class="fas fa-map-marker-alt"></i>Sector-1,Road-3,Uttara,Dhaka-1230</p>
            </div>
            </div>
            <span><i class="fab fa-facebook social-icon"></i></span>
            <span><i class="fab fa-instagram social-icon"></i></span>
            <span><i class="fab fa-twitter social-icon"></i></span>
            <span><i class="fab fa-youtube social-icon"></i></span>
            <br />
            <small className="text-white">© Mind Health Clinic 2021. All Rights Reserved</small>
        </footer>
        </div>
    );
};

export default Footer;
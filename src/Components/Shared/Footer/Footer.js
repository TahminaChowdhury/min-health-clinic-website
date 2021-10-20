import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
       <footer className="bg-dark mt-5 p-5 text-white">
               <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="text-start">
                        <h4><span className="fs-1 text-primary"> Mind </span>Health Clinic</h4>
                        <p className="text-white">You don’t have to <br /> control your thoughts. <br /> You just have to stop letting them control you. </p>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                    <ul>
                    <li><Link to="/home" >Dpression Treatment</Link></li>
                    <li><Link to="/home" >Anxiety Counselling</Link></li>
                    <li><Link to="/home" >Personal Development</Link></li>
                    <li><Link to="/home" >Couples Counselling</Link></li>
                    <li><Link to="/home" >Stress-Related Disorders Treatment</Link></li>
                    <li><Link to="/home" >Eating Disorders Disorders Treatment</Link></li>
                    </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                    <div>
                        <p>Contact-Info</p>
                        <p><i class="far fa-envelope"></i>        Email:mindhealthclinic@gmail.com</p>
                        <p><i class="fas fa-phone-alt"></i> Call us: 01755-555-80</p>
                        <p><i class="fas fa-map-marker-alt"></i>Sector-1,Road-3,Uttara,Dhaka-1230</p>
                    </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col">
                        <div className="text-center pt-5">
                        <span><i class="fab fa-facebook social-icon"></i></span>
                            <span><i class="fab fa-instagram social-icon"></i></span>
                            <span><i class="fab fa-twitter social-icon"></i></span>
                            <span><i class="fab fa-youtube social-icon"></i></span>
                            <br />
                            <small className="text-white">© Mind Health Clinic 2021. All Rights Reserved</small>
                        </div>
                    </div>
               </div>
       </footer>
    );
};

export default Footer;
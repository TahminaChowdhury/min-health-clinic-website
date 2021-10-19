import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark py-3 text-center">
            <div className="ps-5 d-flex justify-content-between">
            <div className="text-start">
                <h4 className="text-light">Mind Health Clinic</h4>
                <p className="text-white">You don’t have to control your thoughts. <br /> You just have to stop letting them control you. </p>
            </div>
            <div className="text-white ms-auto pe-5 text-start">
                <p>Contact-Info</p>
                <p><i class="far fa-envelope"></i>        Email:englishdiscovery@gmail.com</p>
                <p><i class="fas fa-phone-alt"></i> Call us: 017555-44444</p>
                <p><i class="fas fa-map-marker-alt"></i> Sector-1, Uttara, Dhaka 1230</p>
            </div>
            <div>

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
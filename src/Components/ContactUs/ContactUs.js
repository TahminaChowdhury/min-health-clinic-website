import React from 'react';
import './ContactUs.css'
import img from '../../images/successful-medical-team_329181-9252.jpg'


const ContactUs = () => {
    return (
        <div>
            <div className="row" container>
                <div className="col-12">
                    <div className="bg-img text-center pt-5">

                    </div>
                </div>
            </div>
            <div className="row bg mt-5 pt-5 text-white">
                <div className="col-sm-12 col-md-6 col-md-6">
                    <div className="p-5">
                    <h1>Contact Info</h1>
                    <hr className="hr" />
                    <h5>Need to discuss before treatment?</h5>
                    <div className="d-flex mt-5">
                        <div className="call-icon">
                            <span className="pe-4 fs-3"><i class="fas fa-phone-alt"></i></span>
                        </div>
                        <div className="ps-4 fs-5">
                            <p>01755-555-80</p>
                            <p>998877665544</p>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="call-icon">
                            <span className="pe-4 fs-3"><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                        <div className="ps-4 fs-5">
                            <p>Sector-1,Road-3/E <br /> 
                            Uttara,Dhaka-1230
                            </p>
                        </div>
                    </div>
                    <p className="pt-4">The best contact you will get here MIND HEART CLINIC</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="py-5">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
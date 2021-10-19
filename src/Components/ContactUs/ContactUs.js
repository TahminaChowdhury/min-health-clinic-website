import React from 'react';
import './ContactUs.css'
import img from '../../images/picture-frustrated-young-caucasian-man-wearing-sweater-eyeglasses-sitting-comfortable-couch-sharing-his-personal-problems-with-middle-aged-female-counselor-during-therapy-session_344912-1930.jpg'


const ContactUs = () => {
    return (
        <div className="bg my-5 py-5">
            <div className="d-flex justify-content-between text-white">
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
                            <p>000000000000</p>
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
                {/* img */}
                <div className="py-5">
                    <img src={img} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default ContactUs;
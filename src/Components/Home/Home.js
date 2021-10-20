import React, { useEffect, useState } from 'react';
import './Home.css'
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import img from '../../images/successful-medical-team_329181-9252.jpg'
import img4 from '../../images/mental-health-1.jpg'
import img5 from '../../images/hand-drawn-illustrations-people-with-mental-health-problems_23-2149048909.jpg'

const Home = () => {
    const [services, setServices] =useState([]);
    useEffect(() => {
        fetch("fakedata.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container className="my-5">
                <h1 className="text-center text-color my-5">Popular Therapy Services</h1>
                <Row className="g-4 mx-3 mb-5">
                    
                        {
                            services.map(service => 
                                <Services 
                                key={service.id}
                                service={service}
                                ></Services>
                            )
                        }
                </Row>
                
            </Container>
           
            <div className="row my-5">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <div>
                        <img src={img4} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                <div>
                        <h3 className="ps-5 ms-5 fw-bold">Services From our best <br /> psychiatrist</h3>
                        <br />
                        <h5 className="ps-5 ms-5">Top level physiotherapy professional, evidenced based treatment. We diagnose the cause and provide you with the best possible treatment.</h5>
                        <div className="illustration px-5 mx-5">
                        <img src={img5} alt="" className="img-fluid"/>
                        </div>
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

export default Home;

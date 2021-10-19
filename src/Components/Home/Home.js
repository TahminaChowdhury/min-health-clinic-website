import React, { useEffect, useState } from 'react';
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import img from '../../images/mental-health-1.jpg'
import img2 from '../../images/hand-drawn-illustrations-people-with-mental-health-problems_23-2149048909.jpg'

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
           
            
        </div>
    );
};

export default Home;

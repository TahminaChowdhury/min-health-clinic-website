import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

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
                <h1 className="text-center">Popular Therapy Services</h1>
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;

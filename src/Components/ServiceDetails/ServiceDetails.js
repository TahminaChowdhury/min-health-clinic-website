import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router';



const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] =useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/TahminaChowdhury/fakedata/main/public/fakedata.json')
        .then(res => res.json())
        .then(data => {
            const singleService = data.find( selectedService => selectedService.id == serviceId)
            console.log(singleService)
            setService(singleService)
        })
    }, [])
    return (
        <div>
           <Container className="mt-5 pt-5">
               <div className="d-flex">
                    <div className="pe-5">
                       <h1>{service.name}</h1>
                       <p className="text-start">{service.description}</p>
                    </div>
                    <div>
                    <img src={service.img} alt="" />
                    </div>
               </div>
           </Container>
        </div>
    );
};

export default ServiceDetails;
import React, { useEffect, useState } from 'react';
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
           <h1>{service.name}</h1>
        </div>
    );
};

export default ServiceDetails;
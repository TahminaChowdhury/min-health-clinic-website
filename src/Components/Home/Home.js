import React, { useEffect, useState } from 'react';
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
            {
                services.map(service => 
                    <Services 
                    key={service.id}
                    service={service}
                    ></Services>
                )
            }
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import './Doctors.css'
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import Banner from '../Banner/Banner';


const Doctors = () => {
    const [doctors, setDoctors] =useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/TahminaChowdhury/fakedata/main/public/fakedata2.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    
    return (
        <div>
            <Container className="my-5">
                <h1 className="my-5 text-color fs-bolder">Our Specialized Doctors</h1>
                <hr className="line" / >
                <Row className="mt-5 g-5">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;
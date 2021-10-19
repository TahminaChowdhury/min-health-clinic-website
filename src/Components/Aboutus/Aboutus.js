import React from 'react';
import Banner from '../Banner/Banner';
import img from "../../images/young-female-psychologist-is-writing-down-her-thoughts-about-depressed-patient_23-2148036646.jpg"
import img2 from '../../images/counselling-1.jpg'
import img3 from '../../images/left-right-brain-infographic_23-2147515202 (2).jpg'
import { Card } from 'react-bootstrap';

const Aboutus = () => {
    return (
        <div>
            <Banner></Banner>
            <div  className="d-flex my-5 py-5">
            <div className="mt-5">
                <h2>Welcome To Mind Health Clinic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quae, illum ab error animi commodi eos veniam porro doloremque enim qui rerum cum eligendi hic veritatis molestias beatae, autem impedit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consectetur repellendus pariatur illum mollitia quis ullam nostrum possimus, consequatur amet cumque veritatis eveniet in, perspiciatis magnam. Id impedit veritatis nulla?</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            </div>
            <div className="d-flex my-5">
            <div>
            <Card className="bg-dark text-white">
                <Card.Img src={img2} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
            </div>
            <div className="bg-dark">
                {/* <img src={img3} alt="" h-75 /> */}
            </div>
            </div>
        </div>
    );
};

export default Aboutus;
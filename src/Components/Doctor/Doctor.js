import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {img, name, description} =props.doctor;
    return (
        <Col md={4} lg={4} className="box">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;
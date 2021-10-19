import React from 'react';
import './Services.css'
import {Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const {id, name, description, img} = props.service;
    return (
      <Col className="col-md-4 col-lg-4 g-5">
        <div className="card p-2 h-100">
          <Image src={img} thumbnail></Image>
          <h5>{name}</h5>
          <p className="text-start">{description.slice(0, 100)}...</p>
          <Card.Footer className="text-center">
          <Link to={`/service/${id}`}>
            <button className="btn details-btn ">View Details <i class="fas fa-arrow-right"></i></button>
            </Link>
          </Card.Footer>
        </div>
      </Col>
    );
};

export default Services;



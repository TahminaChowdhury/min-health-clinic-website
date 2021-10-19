import { Carousel } from 'bootstrap';
import './Banner.css'
import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/woman-counselor-talking-staying-close_23-2148759095.jpg'
import img2 from '../../images/little-girl-having-session-with-pschoterapist-man-giving-test-with-pictures-talking-with-school-girl-childhood_1157-47493.jpg'
import img3 from '../../images/couple-therapy-marriage-counseling-psychologist-counselor-therapist-relationship-consultant-giving-advice-man-woman-sitting-psychotherapy-session-family-mental-health-concept_155003-31651.jpg'


const Banner = () => {
    return (
      <Container className="banner mb-5">
        
     
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img} class="d-block w-100 h-75" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100 h-75" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100 h-75" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </Container>
    );
};

export default Banner;
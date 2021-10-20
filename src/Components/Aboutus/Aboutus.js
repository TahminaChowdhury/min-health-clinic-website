import React from 'react';
import './About.css'
import img1 from '../../images/young-female-psychologist-is-writing-down-her-thoughts-about-depressed-patient_23-2148036646.jpg'
import img3 from '../../images/tiny-people-beautiful-flower-garden-inside-female-head-isolated-flat-illustration_74855-11098.jpg'
import img2 from '../../images/doctor-4.jpg'
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <div className="container">
            <div className="row bg-color">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="p-5">
                    <h1>Welcome to</h1>
                    <h1 className="text-color">MIND HEALTH CLINIC</h1>
                    <h5>Mental health is not a destination, but a process. It's about how you drive, not where you're going.</h5>
                    <div className="row mt-4" >
                        
                        <div className="col-sm-6 col-md-6">
                            <Link to="/login">
                            <button className="btn btn-regular
                            ">Fixed an appointment</button>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-6">
                        <Link to="/home">
                        <button className="btn btn-regular ms-4 ">View ervices</button>
                        </Link>
                        </div>
                        </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img3} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row my-5 py-5 fs-5">
                <div className="col-12">
                <div>
                <h2>Importance of Meantal health</h2>
                <p>Mental health is integral to living a healthy, balanced life. According to the National Alliance of Mental Illness (NAMI), one in five American experience mental health issues which translates to more than 40 million adults a year.Our mental health encompasses our psychological, emotional and social well-being. This means it impacts how we feel, think and behave each day. Our mental health also contributes to our decision making process, how we cope with stress and how we relate to others in our lives.</p>
                

                <h2>Why is emotional health important?</h2>
                <p>Emotional and mental health is important because it’s a vital part of your life and impacts your thoughts, behaviors and emotions. Being healthy emotionally can promote productivity and effectiveness in activities like work, school or caregiving. It plays an important part in the health of your relationships, and allows you to adapt to changes in your life and cope with adversity.</p>
                <div className="text-center my-3">
                <img src={img1} alt="" className="img-fluid"/>
                </div>
                <h2>How can you improve your emotional health day-to-day?</h2>

                <p>There are steps you can take to improve your mental health everyday. Small things like exercising, eating a balanced and healthy meals, opening up to other people in your life, taking a break when you need to, remembering something you are grateful for and getting a good night’s sleep, can be helpful in boosting your emotional health.</p>

                <p>Lastly, you can also learn more about taking care of your mental health on our blog. Discover ways to take a healthy approach to your emotional wellness, as well as understand issues like depression and how it can affect men and women differently. Read more articles by our caring team of psychologists and psychiatrists here to help support a healthy mind and lifestyle.</p>
                
                <div className="text-center my-3">
                <img src={img2} alt="" className="img-fluid"/>
                </div>
                <p>Dr. Glen Xiong attended college at UC Berkeley, medical school at UC Davis, and completed his residency at Duke University. He has more than 15 years of clinical experience with expertise in psychopharmacology, depression, anxiety, neuropsychiatry, and memory care. Dr. Xiong takes a collaborative approach to patient care, striving to improve the lives of patients through compassionate clinical care while promoting choice and autonomy. He grew up in San Francisco and continues to live in Northern California.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
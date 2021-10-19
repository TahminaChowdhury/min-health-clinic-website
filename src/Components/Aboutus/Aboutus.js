import React from 'react';
import './About.css'
import Banner from '../Banner/Banner';
import img1 from '../../images/young-female-psychologist-is-writing-down-her-thoughts-about-depressed-patient_23-2148036646.jpg'
import img3 from '../../images/hand-drawn-mental-health-instagram-stories-collection_23-2149053447.jpg'
import img2 from '../../images/doctor-2.jpg'
import img4 from '../../images/mental-health-1.jpg'
import img5 from '../../images/hand-drawn-illustrations-people-with-mental-health-problems_23-2149048909.jpg'

const Aboutus = () => {
    return (
        <div >
            <Banner></Banner>
            <div  className="my-5 py-5">
            <div className="mt-5 p-5">
                <h2>Welcome To Mind Health Clinic</h2>
                <p>Mental health is integral to living a healthy, balanced life. According to the National Alliance of Mental Illness (NAMI), one in five American experience mental health issues which translates to more than 40 million adults a year.Our mental health encompasses our psychological, emotional and social well-being. This means it impacts how we feel, think and behave each day. Our mental health also contributes to our decision making process, how we cope with stress and how we relate to others in our lives.</p>
                

                <h2>Why is emotional health important?</h2>
                <p>Emotional and mental health is important because it’s a vital part of your life and impacts your thoughts, behaviors and emotions. Being healthy emotionally can promote productivity and effectiveness in activities like work, school or caregiving. It plays an important part in the health of your relationships, and allows you to adapt to changes in your life and cope with adversity.</p>

                <div className="text-center">
                <img src={img1} alt="" />
                </div>

                <h2>How can you improve your emotional health day-to-day?</h2>

                <p>There are steps you can take to improve your mental health everyday. Small things like exercising, eating a balanced and healthy meals, opening up to other people in your life, taking a break when you need to, remembering something you are grateful for and getting a good night’s sleep, can be helpful in boosting your emotional health.</p>

                <p>Lastly, you can also learn more about taking care of your mental health on our blog. Discover ways to take a healthy approach to your emotional wellness, as well as understand issues like depression and how it can affect men and women differently. Read more articles by our caring team of psychologists and psychiatrists here to help support a healthy mind and lifestyle.</p>
                
                 <div className="text-center">
                <img src={img2} alt="" />
                </div>
                
                <p>Dr. Glen Xiong attended college at UC Berkeley, medical school at UC Davis, and completed his residency at Duke University. He has more than 15 years of clinical experience with expertise in psychopharmacology, depression, anxiety, neuropsychiatry, and memory care. Dr. Xiong takes a collaborative approach to patient care, striving to improve the lives of patients through compassionate clinical care while promoting choice and autonomy. He grew up in San Francisco and continues to live in Northern California.</p>
                </div>
            </div>
                <div className="d-flex my-5">
                <div className="bg-dark">
                    {/* <img src={img3} alt="" h-75 /> */}
                </div>
                </div>
                <div className="d-flex my-5">
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <h3 className="ps-5 ms-5 fw-bold">Services From our best <br /> psychiatrist</h3>
                        <br />
                        <h5 className="ps-5 ms-5">Top level physiotherapy professional, evidenced based treatment. We diagnose the cause and provide you with the best possible treatment.</h5>
                        <div className="illustration px-5 mx-5">
                        <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Aboutus;
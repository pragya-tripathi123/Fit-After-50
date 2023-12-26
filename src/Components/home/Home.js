import React from 'react'

import "./../../App.css";
import Section1 from './homepages/Section1';
import Section2 from './homepages/Section2';
import AboutUs from "./homepages/AboutUs";
import OurMission from "./homepages/OurMission";
import WhyUs from './homepages/Whyus';
import Plans from "./homepages/Plans";
import Testimonial from "./homepages/Testimonial";
import Footer from './homepages/Footer';
import OwlCar from './homepages/OwlCar';
import svg3 from "./../../images/istock2.png";
function Home() {
  
  return (


    <>
      <Section1></Section1>
      <Section2></Section2>
      <AboutUs image = {svg3}></AboutUs>
      <OurMission></OurMission>
      <WhyUs></WhyUs>
      <Plans></Plans>
      <Testimonial></Testimonial>
      <OwlCar></OwlCar>
      <Footer></Footer>
    </>
  );
}

export default Home;
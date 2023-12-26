import React from 'react';
import { Container } from 'react-bootstrap';
import Fitness1 from '../fitness/Fitness1';
import FItnessCard from '../fitness/FItnessCard';
import Footer from '../home/homepages/Footer';
import img1 from './../../images/weight1.jpg';
import img2 from './../../images/weight2.jpg';
import img3 from './../../images/weight3.jpg';


const data = [{
  photo: img1, heading: "21 Reasons to Stick with Your Fitness Commitment in ‘21", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img2, heading: "Top 23 Proven Tips to Raise Metabolism for People Over 50 for..", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img3, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img3, heading: "21 Reasons to Stick with Your Fitness Commitment in ‘21", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img2, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}]
export default function Weight() {
  return (
    <>
      <section>
        <div className='weight-sec'>
          <Container>
            <div className='top-name'>
              <span>Home</span>
              <span>.</span>
              <span className='active-about'>Weight management</span>
            </div>
          </Container>
        </div>
        <Fitness1 header={"Weight management"} para1={"Weight Management. Essential for your fitness lifestyle."} para2={"An essential componant of being fit after 50 is maintaining healthy weight. There are numerous factors that can influence body weight, some of which are out of our control, such as genetic makeup, gender, and age. Other factors that influence body weight we can control include what kind of food and how much we eat, the level of physical activity, and environmental and social factors. Studies show a gradual increase in the average BMI of Americans as we approach 50 to 60. Living a long and healthy life requires maintinging a healthy weight. The articles below provide ideas ans solutions to help you on your path."}></Fitness1>
        <FItnessCard datas={data}></FItnessCard>
        <div className='fitn-footer'>
          <Footer></Footer>
        </div>
      </section>
    </>
  )
}

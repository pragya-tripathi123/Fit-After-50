import React from 'react'
import { Container } from 'react-bootstrap'
import img1 from './../../images/fitness_card.jpg'
import img2 from './../../images/image 241.jpg'
import FItnessCard from '../fitness/FItnessCard'
import Fitness1 from '../fitness/Fitness1'
import Footer from '../home/homepages/Footer'
const data = [{
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img2, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img2, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img2, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}]
export default function Nutrition() {
  return (
    <>
       <section>
        <div className='nutrition-sec'>
          <Container>
            <div className='top-name'>
              <span>Home</span>
              <span>.</span>
              <span className='active-about'>Fitness</span>
            </div>
          </Container>
        </div>
        <Fitness1 header={"Nutrition"} para1={"As simple as fresh, whole food."} para2={"One thing all eating patterns that sustain good health have in common is lots of fruits, vegetables, and whole grains, along with healthy sources of protein and fats. Consistently eating fresh whole foods with an emphasis on vegetables and fruits will help maintain a healthy body weight and lower your risk for conditions such as heart disease, stroke, diabetes, and certain forms of cancer. The articles below will help you get started."}></Fitness1>
        <FItnessCard datas = {data}></FItnessCard>
        <div className='nutrition-footer'>
          <Footer></Footer>
        </div>
       </section> 
    </>
  )
}

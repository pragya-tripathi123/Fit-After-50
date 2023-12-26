import React from 'react'
import { Container } from 'react-bootstrap'
import Fitness1 from './Fitness1'
import FItnessCard from './FItnessCard'
import Footer from '../home/homepages/Footer'
import img1 from './../../images/fitness_card.jpg'
const data = [{
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  photo: img1, heading: "How to Boost Your Immune System", para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean aeo massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}]
export default function Fitness() {
  return (
    <>
      <section>
        <section className='fitness-sec'> 
          <Container>
            <div className='top-name'>
              <span>Home</span>
              <span>.</span>
              <span className='active-about'>Fitness</span>
            </div>
          </Container>
        </section>
        <Fitness1 header={"Fitness"} para1={"We are solution for your good health !"} para2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis dis parturient montes, nasceturridiculus mus."}></Fitness1>
        <FItnessCard datas = {data}></FItnessCard>
        <div className='fitn-footer'>
          <Footer></Footer>
        </div>
      </section>
    </>
  )
}

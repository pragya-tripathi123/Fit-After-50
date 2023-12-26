import React from 'react'
import { Container } from 'react-bootstrap'
import Abt from './../home/homepages/AboutUs'
import Lorem from './Lorem'
import Services from './Services'
import OurProcess from './OurProcess'
import Footer from './../home/homepages/Footer'
import Gsm from './Gsm'
import Goal from './gsmPages/Goal'
import aboutimg from './../../images/cycle.png'
export default function About() {
  return (
    <>
      <section>
        <div className='aboutpage'>
          <Container>
            <div className='top-name'>
              <span>Home</span>
              <span>.</span>
              <span className='active-about'>About Us</span>
            </div>
          </Container>
        </div>

        <div className='abt-us'>
          <Container>
            <Abt image = {aboutimg}></Abt>
          </Container>
        </div>
        <Lorem></Lorem>
        <Services></Services>
        <Gsm></Gsm>
        <OurProcess></OurProcess>
        <div className='abt-footer'>
          <Footer></Footer>
        </div>
      </section>
    </>
  )
}

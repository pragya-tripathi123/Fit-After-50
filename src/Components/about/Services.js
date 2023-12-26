import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import svg1 from "./../../images/Group 507.svg";
import svg2 from "./../../images/Group 508.svg";
import svg3 from "./../../images/Group 509.svg";
const data = [{ imges: svg1, para: "Fitness" }, { imges: svg2, para: "Nutrition" }, { imges: svg3, para: "Weight Management" }, { imges: svg2, para: "Fitness" }, { imges: svg3, para: "Nutrition" }]
export default function Services() {
  return (
    <>
      <section className='services'>
        <Container className='our-service'>
                  <div className='services-heading'><h3>Our Services</h3></div>
            <Row className='gap-5 justify-content-center'> 
                {
                    data.map((item)=>(
                        <Col lg="3">
                            <div className='service-text'>
                                <div>
                                    <img src={item.imges} alt="" style={{ width: "75%" }} />
                                </div>
                                <div>
                                    <p>{item.para}</p>
                                </div>
                                <div className='mt-4'>
                                    <span>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </span>
                                </div>
                            </div>
                        </Col>
                    ))
                }
                </Row>
        </Container>
      </section>
    </>
  )
}

import React from 'react'
// BwglP9PyJ8ELCPYP
import { Col, Container, Row } from 'react-bootstrap'
const data = [{ num: "01.", head: "Fitness", para: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since " }, 
{ num: "02.", head: "Fitness", para: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since " }, 
{ num: "03.", head: "Fitness", para: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since " }, 
{ num: "04.", head: "Fitness", para: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since " },]
export default function OurProcess() {
  return (
    <>
      <section className='process'>
        <Container>
                <div className='services-heading'><h3>Our Process</h3></div>
              <Row className='gap-sm-5 gap-lg-0 justify-content-center'>
                    {
                        data.map((items) =>(
                            <Col lg="3" md="5">
                                <div className='process-items'>
                                    <h3>{items.num}</h3>
                                    <h4>{items.head}</h4>
                                    <p>{items.para}</p>
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

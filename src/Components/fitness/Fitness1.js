import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export default function Fitness1(props) {
  return (
    <>
        <section className='fitness1'>
              <Container>
                  <Row className="align-items-center">
                      <Col xl="12">
                          <div className="about-text commonfitness abouth4">
                              <h3 className="about">{props.header}</h3>
                              <h4>{props.para1}</h4>
                              <p>
                                  {props.para2}
                              </p>
                          </div>
                      </Col>
                  </Row>
              </Container>
        </section>
    </>
  )
}

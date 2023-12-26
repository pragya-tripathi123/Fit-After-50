import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import img1 from './../../images/weight5.jpg'
export default function Author2() {
  return (
    <div>
          <Container className='authors mt-5'>
              <Row className='gap-5'>
                  <Col lg="5">
                      <img src={img1} alt="" className='img-fluid' />
                  </Col>
                  <Col lg="6">
                      <h3>Lorem ipsum lorem ipsum</h3>
                      <p>The anti-aging health benefits of eating right and exercise are well understood. Remember, you have a lot of control over what kind of aging years you experience. When you adopt a lifestyle of healthy nutrition and regular exercise, you give yourself the gift of getting fit after 50. And it’s not just for you. Your family and friends all benefit.Regular exercise and a healthy diet promote longevity and prevent age-related diseases like dementia, Alzheimer’s, Diabetes Type 2, and others. Put yourself in the driver’s seat to control your outcome.</p>
                  </Col>
                  <p className='mt-4'>As Bette Midler sings, “Just remember in the winter, far beneath the bitter snows… Lies a seed that with the sun’s love, in the spring becomes the rose.”</p>
              </Row>
          </Container>
    </div>
  )
}

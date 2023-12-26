import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from './../../images/weight4.jpg'
export default function Author() {
  return (
    <Container className='authors mt-5'>
      <Row>
        <Col lg="6">
            <h3>David Schutz</h3>
            <h4>Two Sides of Your Immune System</h4>
            <p>Springtime is just around the corner, so it’s time to start thinking about what you can do to get outside for your anti-aging fitness exercise routine and paying more attention to your diet. As you know, adopting a lifestyle of regular fitness is one of the best things you do to add healthy years to your life. Additionally, regular exercise over the age of 50 keeps your mind sharp and improves cognitive function, including memory.</p>
        </Col>
        <Col lg ="6" className='text-end'>
          <img src={img1} alt="" className='img-fluid' />
        </Col>
      </Row>
    </Container>
  )
}

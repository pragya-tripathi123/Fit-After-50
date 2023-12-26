import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
export default function Strategy() {
  return (
    <div>
      <section className='goal-sec'>
        <Container>
          <Row>
            <Col lg="6" sm="12" className='goal-f'>
              <h4>About our Strategy</h4>
              <p>For every customer</p>
            </Col>
            <Col lg="6" sm="12" className='goal-s'>
              <h4>What we offer</h4>
              <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  type and scrambled it to make a type specimen book.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

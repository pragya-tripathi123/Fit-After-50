import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const data = [
  { plans: "Basic Plan", price: "$269", service: "✓ Lorem ipsum" },
  { plans: "Premium Plan", price: "$799", service: "✓ Lorem ipsum" },
  { plans: "Starter Plan", price: "$439", service: "✓ Lorem ipsum" },
];
export default function Plans() {
  return (
    <>
      <section className="plans">
        <Container>
          <div className="planstext planh4">
            <h3>Plans</h3>
            <h4>Our membership plans</h4>
            <p>
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make .
            </p>
          </div>

          <div className="plansCard">
            <Row className='planrow'>
              {data.map((items) => (
                <Col xl="4" md ="12">
                  <div className='allplans'>
                    <h5>{items.plans}</h5>
                    <h4>{items.price}</h4>
                    <p>{items.service}</p>
                    <p>{items.service}</p>
                    <p>{items.service}</p>
                    <p>{items.service}</p>
                    <button type="button" className="planbtn">
                      Purchase plan
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

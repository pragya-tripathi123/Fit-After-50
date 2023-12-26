import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec5img1 from './../../../images/iStock-1302577398 (1).jpg'
export default function Section5() {
  return (
    <>
      <section className="whyus">
        <Container className='p-lg-0'>
          <Row className='align-items-center'>
            <Col xl="7" md="12">
              <Container>
                <div className="whyusdiv">
                  <img src={sec5img1} alt="" className="whyusimg img-fluid" />
                </div>
              </Container>
            </Col>
            <Col xl="5" md="12" className="sect5text">
              <div className="commontext whyush4">
                <h3>Why Us</h3>
                <h4>We will take care your health !</h4>
                <p>
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make .
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

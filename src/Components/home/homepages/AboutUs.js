import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";



export default function AboutUs(props) {
 
  return (
    <>
      <section className="aboutUs" >
        <Container>
          <Row className="align-items-center">
            <Col xl="6" md="12">
              <div className="about-text commontext abouth4">
                <h3 className="about">About Us</h3>
                <h4>We are solution for your good health !</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
                <button type="button" className="aboutUsbtn">
                  Read More
                </button>
              </div>
            </Col>
            <Col xl="6" md="9" className="text-center mt-md-5">
              <div className="aboutimg position-relative ">
                <img src={props.image} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

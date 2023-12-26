import React from "react";
import imag from "./../../../images/image 285.png";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import "./../../../App.css";
export default function Section1() {
  return (
    <>
      <section className="section1">
        <div className="overlayy">
          
        </div>
        <div style={{ display: "block" }}>
          <Carousel data-bs-theme="dark">
            <Carousel.Item style={{ maxHeight: "750px" }}>
              <img className="d-block w-100 sliderImg" src={imag} alt="First slide" />
              <Carousel.Caption className="caption">
                <Container>
                  <Row>
                    <Col xs="12" xl="7" className="text-center text-lg-start">
                      <h1>Taking your concepts from prototype to production</h1>
                      <p>
                        s simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type .
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "1600px" }}>
              <img className="d-block w-100 sliderImg" src={imag} alt="First slide" />
              <Carousel.Caption className="caption">
                <Container>
                  <Row>
                    <Col xs="12" xl="7" className="text-center text-lg-start">
                      <h1>Taking your concepts from prototype to production</h1>
                      <p>
                        s simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type .
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "1750px" }}>
              <img className="d-block w-100 sliderImg" src={imag} alt="First slide" />
              <Carousel.Caption className="caption">
                <Container>
                  <Row>
                    <Col xs="12" xl="7" className="text-center text-lg-start">
                      <h1>Taking your concepts from prototype to production</h1>
                      <p>
                        s simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type .
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

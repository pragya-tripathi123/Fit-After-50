import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import svg1 from "./../../../images/Group 507.svg";
import svg2 from "./../../../images/Group 508.svg";
import svg3 from "./../../../images/Group 509.svg";


const data = [
  { image: svg1, content: "Fitness" },
  { image: svg2, content: "Nutrition" },
  { image: svg3, content: "Weight Management" },
];

export default function Section2() {
  
  return (
    <>
      <section className="section2">
        <Container className="containers">
          <Row className="gap-lg-0 gap-md-4 p-2">
            {data.map((item) => (
              <Col className="col-items" lg="3">
                <img src={item.image} alt="oops" />
                <p>{item.content}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

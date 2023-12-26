import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import svg1 from './../../../images/Vector (4).svg'
import svg2 from './../../../images/Vector (1).svg'
import svg3 from './../../../images/Vector (2).svg'
import svg4 from './../../../images/Frame (1).svg'

const data = [
  { para: "Lorem Epsum", links: "Link 2" },
  { para: "Lorem Epsum", links: "Link 2" },
  { para: "Lorem Epsum", links: "Link 2" }
];
export default function Footer() {
  return (
    <>
      <section className="Footersec">
        <footer className="footer">
          <Container>
            <Row className="linkRow">
              <Col lg="6">
                <div className="footerpara1">
                  <p>
                    Getting Fit After 50 – or at any time of your life – has
                    many benefits. For those of us over 50, the benefits include
                    improved weight management ability, reduction of age-r
                  </p>
                </div>
              </Col>
              <Col lg="6" className="ps-lg-5 footerlinks">
                <Row>
                  {data.map((items) => (
                    <Col lg="4" sm="4" className='mt-sm-5 mt-lg-0'>
                      <div>
                        <p>{items.para}</p>
                        <p>{items.links}</p>
                        <p>{items.links}</p>
                        <p>{items.links}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="copyright">
                <div>
                  <p>© Copyright 2023 Fit after 50 Design</p>
                </div>
              </Col>
              <Col lg="6" className='ps-lg-5'>
                <div className="social_icons">
                  <p>Follow Us On</p>
                  <div className='ps-lg-5'>
                    <img src={svg1} alt=""/>
                    <img src={svg2} alt="" />
                    <img src={svg3} alt="" />
                    <img src={svg4} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </section>
    </>
  );
}

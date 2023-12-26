import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./../../../images/Archive 2/image 35.png";
import img2 from "./../../../images/Archive 2/image 42.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import vec1 from "./../../../images/Vector (7).svg"
import pen from "./../../../images/Frame (2).svg"
// import comm from "./../../../images/Archive 3/Frame.svg"
// const data = [
//   {
//     imge: img1,
//     name: "Rachel Doe",
//     para1: "Lorem Ipsum",
//     para2:
//       "Is simply dummy text of thprinting andsacvfhtht typesetting ndustry.Loremsss Ipsumddc has been theindustry's stand arddxdcd dummy text ever sinceisss simply.",
//   },
//   {
//     imge: img2,
//     name: "John Doe",
//     para1: "Lorem Ipsum",
//     para2:
//       "Is simply dummy text of thprinting andsacvfhtht typesetting ndustry.Loremsss Ipsumddc has been theindustry's stand arddxdcd dummy text ever sinceisss simply.",
//   },
// ];


const options = {
  margin: 30,
  responsiveClass: true,
  
  dots: true,
  autoplay: true,
  // navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    400: {
      items: 1,
      nav: false,
    },
    1000:{
      items:2,
      nav: true
    }
  },
};


export default function OwlCar() {
  
    return (
      <>
        <section class="owlCar">
          <Container>
            <OwlCarousel autoplayHoverPause={true} loop={true} {...options}>
              <div>
                <Container className='p-0'>
                  <Row>
                    <Col className="p-0">
                      <div className="contain8">
                        <div className="reviewData">
                          <div className="reviewimg">
                            <div className="userimg">
                              <img src={img1} alt="" />
                            </div>
                            <div className="username">
                              <h4>Rachel Doe</h4>
                              <p>Lorem Ipsum</p>
                              <div className="stars">
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reviewpara">
                            <span>
                              Is simply dummy text of thprinting andsacvfhtht
                              typesetting ndustry.Loremsss Ipsumddc has been
                              theindustry's stand arddxdcd dummy text ever
                              sinceisss simply.
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col className="p-0">
                      <div className="contain8">
                        <div className="reviewData">
                          <div className="reviewimg">
                            <div className="userimg">
                              <img src={img1} alt="" />
                            </div>
                            <div className="username">
                              <h4>John Doe</h4>
                              <p>Lorem Ipsum</p>
                              <div className="stars">
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reviewpara">
                            <span>
                              Is simply dummy text of thprinting andsacvfhtht
                              typesetting ndustry.Loremsss Ipsumddc has been
                              theindustry's stand arddxdcd dummy text ever
                              sinceisss simply.
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col className="p-0">
                      <div className="contain8">
                        <div className="reviewData">
                          <div className="reviewimg">
                            <div className="userimg">
                              <img src={img2} alt="" />
                            </div>
                            <div className="username">
                              <h4>Rachel Doe</h4>
                              <p>Lorem Ipsum</p>
                              <div className="stars">
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reviewpara">
                            <span>
                              Is simply dummy text of thprinting andsacvfhtht
                              typesetting ndustry.Loremsss Ipsumddc has been
                              theindustry's stand arddxdcd dummy text ever
                              sinceisss simply.
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col className="p-0">
                      <div className="contain8">
                        <div className="reviewData">
                          <div className="reviewimg">
                            <div className="userimg">
                              <img src={img2} alt="" />
                            </div>
                            <div className="username">
                              <h4>John Doe</h4>
                              <p>Lorem Ipsum</p>
                              <div className="stars">
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reviewpara">
                            <span>
                              Is simply dummy text of thprinting andsacvfhtht
                              typesetting ndustry.Loremsss Ipsumddc has been
                              theindustry's stand arddxdcd dummy text ever
                              sinceisss simply.
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col className="p-0">
                      <div className="contain8">
                        <div className="reviewData">
                          <div className="reviewimg">
                            <div className="userimg">
                              <img src={img1} alt="" />
                            </div>
                            <div className="username">
                              <h4>John Doe</h4>
                              <p>Lorem Ipsum</p>
                              <div className="stars">
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reviewpara">
                            <span>
                              Is simply dummy text of thprinting andsacvfhtht
                              typesetting ndustry.Loremsss Ipsumddc has been
                              theindustry's stand arddxdcd dummy text ever
                              sinceisss simply.
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col className="p-0">
                      <div className="contain8">
                        <div className="reviewData">
                          <div className="reviewimg">
                            <div className="userimg">
                              <img src={img2} alt="" />
                            </div>
                            <div className="username">
                              <h4>John Doe</h4>
                              <p>Lorem Ipsum</p>
                              <div className="stars">
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                                <span>
                                  <img src={vec1} alt="" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reviewpara">
                            <span>
                              Is simply dummy text of thprinting andsacvfhtht
                              typesetting ndustry.Loremsss Ipsumddc has been
                              theindustry's stand arddxdcd dummy text ever
                              sinceisss simply.
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </OwlCarousel>
            <div className="review">
              <h4>write a review</h4>
              <div className="pen">
                <img src={pen} alt="" />
              </div>
            </div>
          </Container>
        </section>
      </>
    );
}

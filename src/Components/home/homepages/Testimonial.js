import React from 'react'
import { Container } from 'react-bootstrap'

export default function Testimonial() {
  return (
    <>
      <section className="testimonial">
        <Container>
          <div className="testimonialtext offset-lg-5">
            <h3>Testimonials</h3>
            <h4>Our customers what says about us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

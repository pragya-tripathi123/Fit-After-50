import React from 'react'
import { Container} from 'react-bootstrap';

export default function OurMission() {
  return (
    <>
      <section className="ourmission">
        <Container className="missioncontain text-center">
          <div className='missiontext'>
                    <h4>Our Mission</h4>
                    <p>
                    To help people 50 and over live longer, healthier lives by
                    providing science-based fitness, nutrition & weight management
                    information.
                    </p>
              </div>
        </Container>
      </section>
    </>
  );
}

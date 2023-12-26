import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Weightdetailpage from './../detailedPage/Weightdetailpage'
import { Col, Container, Row } from 'react-bootstrap'

export default function FItnessCard(props) {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    // <Routes><Route path="./../detailedPage" element={<Weightdetailpage />} /></Routes>
    navigate('./../detailedPage');
    // <Weightdetailpage />
  };

  return (
    <>
      <section className='fitness-card'>
        <Container>
          <Row>
            {props.datas.map((item) => (
              <Col xl="4" md="6" className='mt-5'>
                <div className='fitness-text'>
                  <img src={item.photo} alt="" />
                  <h4>{item.heading}</h4>
                  <p>{item.para}</p>
                  <button type="button" className="fit-btn" onClick={navigateToContacts}>
                    Read More
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

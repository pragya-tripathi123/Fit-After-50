import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Toolscards(props) {
  return (
    <div>
      <Container className='toolcard-container'>
        <Row className='justify-content-center'>
            {
                props.alldata.map((items)=>(
                    <Col xl="3" md="6">
                        <div className='toolcard'>
                            <p>{items}</p>
                        </div>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

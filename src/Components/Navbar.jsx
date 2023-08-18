import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Navbar() {
  return (
    <>
    <section>
        <Container className='border'>
            <Row>
                <Col lg={3}>
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                </Col>
                <Col lg={1}>dafef</Col>
                <Col lg={8}>dased</Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Navbar
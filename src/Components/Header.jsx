import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from "../assets/Img/logo.png"

function Header() {
  return (
    <>
    <section className='container py-3'>
      <Row className='align-items-center'>
        <Col lg={2}>
        <img src={logo} alt="" />
        </Col>
        <Col lg={8}>

        </Col>
        <Col lg={2} className=''>
        <ul className='d-flex justify-content-end gap-4'>
          <li className='d-flex gap-1'><i class="bi bi-suit-heart-fill"></i>Whislist(1)</li>
          <li className='d-flex gap-1'><i class="bi bi-bar-chart-line-fill"></i>Compare(5)</li>
          <li className='d-flex gap-1'><i class="bi bi-lock-fill"></i>Registration/Login</li>
          <li className='d-flex gap-1'><i class="bi bi-cart-fill"></i>Cart(0)</li>
        </ul>
        </Col>
      </Row>
    </section>
    </>
  )
}

export default Header
import React from 'react'
import { Container } from 'react-bootstrap'

function Top() {
  return (
    <section className='top'>
      <Container className='text-color '>
        <ul className='d-flex justify-content-between py-2' >
          <div className='d-flex gap-4'>
            <li><i class="bi bi-telephone-fill"></i> +7 777 123 1575 </li>
            <li><i class="bi bi-envelope-fill"></i> admin@real-web.pro </li>
          </div>

          <div className='d-flex gap-4'>
            <li><i class="bi bi-facebook"></i></li>
            <li><i class="bi bi-envelope-fill"></i></li>
            <li><i class="bi bi-google"></i></li>
            <li><i class="bi bi-twitter"></i></li>
            <li><i class="bi bi-instagram"></i></li>
          </div>
        </ul>
      </Container>
    </section>
  )
}

export default Top
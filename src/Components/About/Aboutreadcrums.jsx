import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Aboutreadcrums() {
  return (
    <section className='about notch postion-relative py-5'>
         
         <Container>
                 <Row>
                    <div style={{maxWidth:"650px"}} className='mx-auto my-5'>
                        <h3 className='ff-bubblegum fs-1 fw-700 text-white text-center'>About Our Kidsacademy</h3>
                        <p className='mt-3 text-center px-sm-5 text-white ff-roboto fst-italic fs-5'>
                            <Link to={"/"} className="text-white ff-roboto fst-italic fs-5">Home</Link>

                            -About

                        </p>
                    </div>
                 </Row>
         </Container>

    </section>
  )
}

export default Aboutreadcrums
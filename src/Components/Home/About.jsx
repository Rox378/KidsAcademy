import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function About() {
    return (
        <section className='about notch position-relative py-5'>
            <Container className='my-sm-5'>
                <Row>
                    <Col md={6}>

                        <img src={"./img/about.png"} alt="about" className='img-fluid' />


                    </Col>

                    <Col md={6}>

                    <h3 className='ff-bubblegum fs-1 fw-700 text-white my-4'>About Our KidsAcademy</h3>
                    <p className='text-white mb-5 mb-sm-5'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>

                    <Link to={"/Read more"} className='px-4 py-3 rounded bg-purple text-white me-3'>Read more</Link>
                    <Link to={"/Buy now"} className='px-4 py-3 rounded bg-warning text-white me-3'>Buy now</Link>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default About
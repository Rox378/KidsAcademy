import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Ourparents() {
    return (
        <section className='our-parents py-sm-5 mt-5'>
            <Container>
                <Row>
                    <div style={{ maxWidth: "650px" }} className='mx-auto mb-4'>
                        <h1 className='ff-bubblegum fs-1 fw-700 text-purple text-center'>What Parents Say</h1>
                        <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

                    </div>
                </Row>

                <Row>
                <Col sm={6} lg={4} className='mb-4' >

                    <div className=' border border-2 border-warning rounded-3 position-relative p-4 testimonial'>
                        <p className='mb-2'>
                            Professionally predominate that timely infrastriuctures tops line methodlogies
                            Colaboratively seize scalable achannels before longterm high impact
                        </p>

                        <h3 className="ff-bubblegum fs-5 fw-700 text-tomato">
                            Joly Smith

                            <span className='ff-bubblegum fs-15 fw-normal text-secondary'> ui/ux Designer</span>
                        </h3>

                        <img src={"./img/test.jpg"} alt="test"  className='position-absolute top-100'/>
                    </div>

                    <div className='ps-3'>
                        <img src={"./img/image1.jpg"} alt="image1" className='img-fluid rounded-circle border border-4 border-warning ms-5 mt-3 position-relative'/>
                    </div>

                

                </Col>

                <Col sm={6} lg={4} className='mb-4' >

                    <div className=' border border-2 border-danger rounded-3 position-relative p-4 testimonial'>
                        <p className='mb-2'>
                            Professionally predominate that timely infrastriuctures tops line methodlogies
                            Colaboratively seize scalable achannels before longterm high impact
                        </p>

                        <h3 className="ff-bubblegum fs-5 fw-700 text-tomato">
                            Joly Smith

                            <span className='ff-bubblegum fs-15 fw-normal text-secondary'> ui/ux Designer</span>
                        </h3>

                        <img src={"./img/test1.jpg"} alt="test"  className='position-absolute top-100'/>
                    </div>

                    <div className='ps-3'>
                        <img src={"./img/image2.jpg"} alt="image1" className='img-fluid rounded-circle border border-4 border-warning ms-5 mt-3 position-relative'/>
                    </div>

                

                </Col>

                <Col sm={6} lg={4} className='mb-4' >

                    <div className=' border border-2 border-info rounded-3 position-relative p-4 testimonial'>
                        <p className='mb-2'>
                            Professionally predominate that timely infrastriuctures tops line methodlogies
                            Colaboratively seize scalable achannels before longterm high impact
                        </p>

                        <h3 className="ff-bubblegum fs-5 fw-700 text-tomato">
                            Joly Smith

                            <span className='ff-bubblegum fs-15 fw-normal text-secondary'> ui/ux Designer</span>
                        </h3>

                        <img src={"./img/test2.jpg"} alt="test"  className='position-absolute top-100'/>
                    </div>

                    <div className='ps-3'>
                        <img src={"./img/test3.jpg"} alt="image1" className='img-fluid rounded-circle border border-4 border-warning ms-5 mt-3 position-relative'/>
                    </div>

                

                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ourparents
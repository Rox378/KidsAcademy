import React from 'react'



import { Container, Col, Row } from 'react-bootstrap';

const feature = [
    {
        heading: "Acitve learning",
        body: "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
        icon: "fa-th-large",
        textcolor: "text-orange",
        bgcolor: "bg-orange"
    },

    {
        heading: "Expert Teachers",
        body: "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors afte",
        icon: "fa-graduation-cap",
        textcolor: "text-warning",
        bgcolor: "bg-warning"
    },

    {
        heading: "Strategi Location",
        body: "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
        icon: "fa-globe",
        textcolor: "text-tomato",
        bgcolor: "bg-tomato"
    },

    {
        heading: "Full Day Programs",
        body: "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
        icon: "fa-link",
        textcolor: "text-purple",
        bgcolor: "bg-purple"
    }

]

function Features() {
    return (
        <section className='py-5 my-lg-5 features'>
            <Container>
                <Row>
                    {
                        feature.map((item, index) => {
                            return (
                                <Col sm={6} lg={3} key={index}>
                                    <div className='text-center px-3  content-box my-3'>
                                        <div className={`${item.bgcolor} rounded-circle mx-auto d-flex align-items-center justify-content-center`} style={{ width: "100px", height: "100px" }}>
                                            <i class={`fa ${item.icon} fs-1 text-white`} aria-hidden="true"></i>
                                        </div>

                                        <h4 className={`${item.textcolor}ff-bubblegum fw-700 my-4`}>{item.heading}</h4>
                                        <p className='text-center'>{item.body}</p>
                                    </div>

                                </Col>
                            )
                        })
                    }

                    {/* <Col sm={6} lg={3}>
                        <div className='text-center px-3 content-box my-3'>
                            <div className='rounded-circle  mx-auto d-flex align-items-center justify-content-center' style={{ width: "100px", height: "100px" }}>
                                <i class="fa fa-th-large fs-1 text-white" aria-hidden="true"></i>
                            </div>

                            <h4 className='ff-bubblegum my-4 fw-700 '></h4>
                            <p className='text-center'>r</p>

                        </div>

                    </Col>

                    <Col sm={6} lg={3}>
                        <div className='text-center px-3 content-box my-3'>
                            <div className='rounded-circle  mx-auto d-flex align-items-center justify-content-center' style={{ width: "100px", height: "100px" }}>
                            <i class="fa fa-th-large fs-1 text-white" aria-hidden="true"></i>

                            </div>

                            <h4 className='ff-bubblegum my-4 fw-700 '></h4>
                            <p className='text-center'></p>

                        </div>
                    </Col>

                    <Col sm={6} lg={3}>
                        <div className='px-3 text-center my-3 content box'>
                            <div className='rounded-circle mx-auto bg-purple d-flex align-items-center justify-content-center' style={{ width: "100px", height: "100px" }}>
                                <i class="fa fa-th-large fs-1 text-white" aria-hidden="true"></i>
                            </div>

                            <h4 className='ff-bubblegum my-4 fw-700 text-tomato'></h4>
                            <p></p>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Features
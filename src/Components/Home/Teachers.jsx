import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const teacher = [
    {
        image : "./img/teacher_01.jpg",
        teachername : "Broklyn Doel",
        teachersubject : "Science Teacher",
        bgcolor : "bg-purple"
    },

    {
        image : "./img/teacher_02.jpg",
        teachername : "Alex Jhonson",
        teachersubject : "Art Teacher",
        bgcolor : "bg-tomato"
    },

    {
        image : "./img/teacher_03.jpg",
        teachername : "Robot Jhonson ",
        teachersubject : "Math Teacher",
        bgcolor : "bg-orange"
    },

    {
        image : "./img/teacher_04.jpg",
        teachername : "Janaton Doe ",
        teachersubject : "English Teacher",
        bgcolor : "bg-blue"
    }
]

function Teachers() {
    return (
        <section className='teachers notch py-sm-5 position-relative'>
            <Container>
                <Row>
                    <div style={{ maxWidth: "650px" }} className='mx-auto mb-4 mx-auto my-5'>
                        <h3 className='ff-bubblegum fs-1 text-white text-center fw-700 my-4'>Meet our teachers</h3>

                        <p className='mt-4 text-center text-white px-sm-5 ff-roboto lh-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

                    </div>
                </Row>

                <Row className='mb-5'>

                    {
                        teacher.map((item,index)=>{
                            return(

                                <Col lg={6} className='mb-4 px-4'>
                                <Row>
                                    <div className='teacher-image col-sm-4 p-0'>
                                        <img src={item.image} alt='teacher01' className='w-100 h-100'/>
                                        </div>
                                   
                                    <div className={`teacher-details p-3 pe-5 text-white col-sm-8 ${item.bgcolor}`}>
                                        <h3 className='ff-bubblegum fw-700'>
                                            {item.teachername}<span className='fs-15 fw-normal ff-bubblegum'>{item.teachersubject}</span>
                                        </h3>
                                        <div className='social-media'>
                                            <Link to={"javascript.void()"}><i className='fa fa-facebook text-white'></i></Link>
                                            <Link to={"javascript.void()"}><i className='fa fa-youtube text-white'></i></Link>
                                            <Link to={"javascript.void()"}><i className='fa fa-twitter text-white'></i></Link>
                                            <Link to={"javascript.void()"}><i className='fa fa-pinterest text-white'></i></Link>
                                            <Link to={"javascript.void()"}><i className='fa fa-instagram text-white'></i></Link>
            
                                        </div>
            
                                        <p className='text-white'>
                                        Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.
                                        </p>
            
                                        <Link to={"/teacher-details.html"} className='text-white view fw-700 ff-roboto'>View Portfolio</Link>
                                    </div>
                                   
                                    </Row>
                                </Col>

                            )
                        })
                    }
                    {/* <Col lg={6} className='mb-4 px-4'>
                    <Row>
                        <div className='teacher-image col-sm-4 p-0'>
                            <img src={"./img/teacher_01.jpg"} alt='teacher01' className='w-100 h-100'/>
                            </div>
                       
                        <div className='teacher-details p-3 pe-5 bg-purple text-white col-sm-8'>
                            <h3 className='ff-bubblegum fw-700'>
                                Broklyn Doel<span className='fs-15 fw-normal ff-bubblegum'>Science Teacher</span>
                            </h3>
                            <div className='social-media'>
                                <Link to={"javascript.void()"}><i className='fa fa-facebook text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-youtube text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-twitter text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-pinterest text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-instagram text-white'></i></Link>

                            </div>

                            <p className='text-white'>
                            Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.
                            </p>

                            <Link to={"/teacher-details.html"} className='text-white view fw-700 ff-roboto'>View Portfolio</Link>
                        </div>
                       
                        </Row>
                    </Col>
                    <Col lg={6} className='mb-4 px-4'>
                    <Row>
                        <div className='teacher-image col-sm-4 p-0'>
                            <img src={"./img/teacher_02.jpg"} alt='teacher02' className='w-100 h-100'/>
                            </div>
                       
                        <div className='teacher-details p-3 pe-5 bg-purple text-white col-sm-8'>
                            <h3 className='ff-bubblegum fw-700'>
                                Broklyn Doel<span className='fs-15 fw-normal ff-bubblegum'>Science Teacher</span>
                            </h3>
                            <div className='social-media'>
                                <Link to={"javascript.void()"}><i className='fa fa-facebook text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-youtube text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-twitter text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-pinterest text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-instagram text-white'></i></Link>

                            </div>

                            <p className='text-white'>
                            Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.
                            </p>

                            <Link to={"/teacher-details.html"} className='text-white view fw-700 ff-roboto'>View Portfolio</Link>
                        </div>
                       
                        </Row>
                    </Col>
                    <Col lg={6} className='mb-4 px-4'>
                    <Row>
                        <div className='teacher-image col-sm-4 p-0'>
                            <img src={"./img/teacher_03.jpg"} alt='teacher03' className='w-100 h-100'/>
                            </div>
                       
                        <div className='teacher-details p-3 pe-5 bg-purple text-white col-sm-8'>
                            <h3 className='ff-bubblegum fw-700'>
                                Broklyn Doel<span className='fs-15 fw-normal ff-bubblegum'>Science Teacher</span>
                            </h3>
                            <div className='social-media'>
                                <Link to={"javascript.void()"}><i className='fa fa-facebook text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-youtube text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-twitter text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-pinterest text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-instagram text-white'></i></Link>

                            </div>

                            <p className='text-white'>
                            Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.
                            </p>

                            <Link to={"/teacher-details.html"} className='text-white view fw-700 ff-roboto'>View Portfolio</Link>
                        </div>
                       
                        </Row>
                    </Col>
                    <Col lg={6} className='mb-4 px-4'>
                    <Row>
                        <div className='teacher-image col-sm-4 p-0'>
                            <img src={"./img/teacher_04.jpg"} alt='teacher04' className='w-100 h-100'/>
                            </div>
                       
                        <div className='teacher-details p-3 pe-5 bg-purple text-white col-sm-8'>
                            <h3 className='ff-bubblegum fw-700'>
                                Broklyn Doel<span className='fs-15 fw-normal ff-bubblegum'>Science Teacher</span>
                            </h3>
                            <div className='social-media'>
                                <Link to={"javascript.void()"}><i className='fa fa-facebook text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-youtube text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-twitter text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-pinterest text-white'></i></Link>
                                <Link to={"javascript.void()"}><i className='fa fa-instagram text-white'></i></Link>

                            </div>

                            <p className='text-white'>
                            Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.
                            </p>

                            <Link to={"/teacher-details.html"} className='text-white view fw-700 ff-roboto'>View Portfolio</Link>
                        </div>
                       
                        </Row>
                    </Col> */}
                </Row>
            </Container>

        </section>
    )
}

export default Teachers
import React from 'react'
import { CardHeader, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const popularclass = [
    {
        Image : "./img/class_01.jpg",
        Imgalt : "class01",
        cardhead : "Imagination classes",
        cardtext : "Draticaly novate fuly rarched an plications awesome theme education",
        textcolor : "text-warning",
        addbgcolor : "bg-warning"
    },
    {
        Image : "./img/class_02.jpg",
        Imgalt : "class02",
        cardhead : "Drawing classes",
        cardtext : "Draticaly novate fuly rarched an plications awesome theme education",
        textcolor : "text-tomato",
        addbgcolor : "bg-tomato"
    },
    {
        Image : "./img/class_03.jpg",
        Imgalt : "class03",
        cardhead : "Learning Classes",
        cardtext : "Draticaly novate fuly rarched an plications awesome theme education",
        textcolor : "text-orange",
        addbgcolor : "bg-orange"  
    }
]

function Popularclass() {
    return (
        <section className='popularclass py-sm-5'>
            <Container className='mt-5'>
                <Row>
                    <div style={{ maxWidth: "650px" }} className='mx-auto mb-4'>
                        <h3 className='ff-bubblegum fs-1 text-purple text-center fw-700 my-4'>Our Popular Classes</h3>

                        <p className='mt-4 text-center px-sm-5'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

                    </div>
                </Row>
                <Row>

                  {
                    popularclass.map((item,index)=>{
                        return(
                            <Col sm={6} lg={4}>
                            <div className='class-item mb-4'>
                                <img src= {item.Image} alt={item.Imgalt} className='img-fluid d-block mx-auto w-100' />
                                <ListGroup horizontal >
                                    <ListGroup.Item className='w-33 text-center border-start-0 fw-700 fs-15 lh-20 rounded-0 border-white bg-purple text-white ff-roboto py-2'>
                                        <div className='lh-20'>Class Size</div>
                                        <div className='lh-20'>30-40</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='w-33 text-center fw-700 fs-15 lh-20 rounded-0 border-white bg-orange text-white py-2'>
                                        <div className='lh-20'>Years</div>
                                        <div className='lh-20'>5-6 years old</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='w-33 text-center border-end-0 fw-700 fs-15 lh-20 rounded-0 border-white bg-tomato text-white py-2'>
                                        <div className='lh-20'>Tuition Fee</div>
                                        <div className='lh-20'>51500</div>
    
                                    </ListGroup.Item>
    
                                </ListGroup>
                                <div className='px-4 py-3'>
                                    <Link to={"./class-single.html"} className= {`ff-bubblegum fs-3 fw-700 ${item.textcolor}`}>{item.cardhead}</Link>
    
                                    <p>
                                        <span className='text-danger'>Class Time: </span>08:00 am - 10:00 am
                                    </p>
    
                                    <p>
                                    Draticaly novate fuly rarched an plications awesome theme education
                                    </p>
    
                                </div>
    
                                <div className={`text-white py-2 px-4 ${item.addbgcolor}`}><i className='fa fa-home'></i> 218 New Newyork Road, USA- 1205</div>
                            </div>
                        </Col>
                        )
                    })
                  }

                    {/* <Col sm={6} lg={4}>
                        <div className='class-item'>
                            <img src="./img/class_02.jpg" alt="class2" className='img-fluid mx-auto d-block w-100' />
                        </div>
                    </Col>

                    <Col sm={6} lg={4}>
                        <div className='class-item'>
                            <img src="./img/class_03.jpg" alt="class3" className='img-fluid mx-auto d-block w-100' />
                        </div>
                    </Col> */}
               <Row>
                 <Col sm={3} className='offset-5 mt-4'>
                  <Link to={"./class.html"} className='bg-purple text-white px-4 py-3 rounded-1 fw-700'><i>see more class</i></Link>
                  </Col>

                  </Row>
                </Row>
            </Container>
        </section>
    )
}

export default Popularclass
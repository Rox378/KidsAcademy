import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './footer.css'

import contact from '../../json-api/contact.json'

import latestNews from '../../json-api/latestNews.json'

import twitter from '../../json-api/twitter.json'

// const contact = 

// [
//   {
//     "icon" : "fa fa-home gap-3 border text-warning p-2 ms-0 ",
//     "text" : "  New Chokoya Road USA."
//   },

//   {
//     "icon" : "fa fa-phone gap-3 border text-danger p-2 ms-0 ",
//     "text" : "  +8801 923 970 212, 0125897"
//   },
//   {
//     "icon" : "fa fa-envelope-o text-orange gap-3 border p-2 ms-0 ",
//     "text" : "Contact@adminLabArtisan"

//   },

//   {
//     "icon" : "fa fa-globe gap-3 border text-purple p-2 ms-0 ",
//     "text" : "Contact@adminLabArtisan"
//   }
// ]

// const latestNews = 
  

// [
//   {
//     "image": "./img/kiddo1.jpg",
//     "text": "Corem psum dolor the amectetuer adipiscing...",
//     "date": "04 February 2021"
//   },
//   {
//     "image": "./img/kiddo2.jpg",
//     "text": "Corem psum dolor the amectetuer adipiscing...",
//     "date": "28 January 2021"
//   },
//   {
//     "image": "./img/kiddo3.jpg",
//     "text": "Duis autem iriure dolor in hendrerit esse...",
//     "date": "03 January 2021"
//   }

// ]




 

function Footer1() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} >
              <img src='./img/logo.png' alt='logo' className='mb-3' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi ad hic nobis nisi! Quo deserunt aspernatur, iste perspiciatis tempore, totam !</p>

              <ul className='list-unstyled'>
                {/* <li className='d-flex align-items-center '>
                    <span><i class="fa fa-home gap-3 border text-warning p-2 ms-0" aria-hidden="true"></i></span>
                    New Chokoya Road,
										USA.
                  </li>
                  <li className='d-flex align-items-center '>
                    <span><i class="fa fa-phone gap-3 border text-danger p-2 ms-0" aria-hidden="true"></i></span>
                    +8801 923 970 212, 0125897
									
                  </li>
                  <li className='d-flex align-items-center'>
                    <span><i class="fa fa-envelope-o  gap-3 border p-2 ms-0" aria-hidden="true"></i></span>
                    Contact@admin
										LabArtisan
                  </li>
                 
                  <li className='d-flex align-items-center '>
                    <span><i class="fa fa-globe gap-3 border text-info p-2 ms-0" aria-hidden="true"></i></span>
                    Email@admin
										LabArtisan
                  </li> */}

                {
                  contact.map((item, index) => {
                    return (
                      <li className='d-flex align-items-center mb-3 fw-500 '>
                        <span><i class={item.icon} aria-hidden="true"></i></span>
                        {item.text}
                      </li>
                    )
                  })
                }
              </ul>

            </Col>
            <Col sm={6} lg={3} >
              <h3 className='text-warning ff-bubblegum fw-700 fs-2 mb-5'>Latest News</h3>
              {
                latestNews.map((item,index)=>{
                  return(
                    <div className='d-flex gap-2 mb-3 align-item-start' key={index}>
                      <div>
                        <a href='blog.html'>
                          <img src={item.image} alt='footer-img'/>
                        </a>
                      </div>

                     <div>
                     <a href='blog.html ' className='text-decoration-none text-dark'>{item.text}</a>
                     <p className='text-warning'>{item.date}</p>
                     </div>

                    </div>
                  )
                })
              }
            </Col>
            <Col sm={6} lg={3} >
            <h3 className='text-tomato ff-bubblegum fw-700 fs-2 mb-5'>Twitter widget</h3>
            {/* <div className='d-flex align-items-start gap-3'>
              <div>
                <i className="fa fa-twitter bg-warning text-white p-1 rounded-circle" aria-hidden="true"></i>
    
              </div>
              <div>
              <p className='mb-0'>Raritas etiam processus them dynamicus sequitur mutatem education theme</p>
              <span className='text-orange'>23 seconds ago</span>
              </div>

              <div>
                <i className='fa fa-twitter bg-tomato text-white p-1 rounded-circle' aria-hidden="true"></i>
              </div>
              <div>
                 <p className='mb-0'>Duis autem veleum iriu dolor hendrerit in vulputate velit</p>
                 <span className='text-orange'>8 seconds ago</span>
              </div>

              <div>
                <i className='fa fa-twitter bg-orange text-white p-1 rounded-circle' aria-hidden ="true"></i>
              </div>

              <div>
                <p>@frankdoe amber tempor cum soluta nobis eleifend</p>
                <span className='text-orange'>2 years ago</span>
              </div>

            </div>
             */}

             {
              twitter.map((item,index)=>{
                return(
                  <div className='d-flex align-items-start gap-3 mb-3' key={index}>
                    <div>
                      <i className= {item.icon}></i>
                    </div>
                    <div>
                      <p className='mb-0'>{item.text}</p>
                      <span className='text-orange'>{item.time}</span>
                    </div>
                  </div>
                )
              })
             }
            </Col>
            <Col sm={6} lg={3}>
            <h3 className='text-tomato ff-bubblegum fw-700 fs-2 mb-5'>Recent photos</h3>
            <div className='d-flex align-items-center gap-3 mb-2'>
              <div><img src='./img/galler01.jpg' alt='gallery01' /></div>
              <div><img src='./img/gallery_02.jpg' alt='gallery02' /></div>
               <div><img src='./img/gallery_03.jpg' alt='gallery03' /></div>

            </div>

            <div className='d-flex align-items-center gap-3 mb-2'>
            <div><img src='./img/gallery_04.jpg' alt='gallery04' /></div>
              <div><img src='./img/gallery_05.jpg' alt='gallery05'/></div>
              <div><img src='./img/gallery_06.jpg' alt='gallery06'/></div>

            </div>

            <div className='d-flex align-items-center gap-3 mb-2'>
            <div><img src='./img/gallery_07.jpg' alt='gallery07' /></div>
              <div><img src='./img/gallery_08.jpg' alt='gallery08'/></div>
              <div><img src='./img/gallery_09.jpg' alt='gallery09' /></div>

            </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer1
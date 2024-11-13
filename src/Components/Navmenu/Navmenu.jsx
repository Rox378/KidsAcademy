import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import navmenu from '../../json-api/navmenu.json'



function Navmenu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-4">
        <Container>
          <Link to="/" className='Navbar-brand'>
            <img src={"./img/logo.png"} alt="" /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                navmenu.map((item, index) => {
                  return (
                    <Link to={item.path} className={`nav-link ff-bubblegum ${item.textcolor}`} key={index} style={{ fontSize: 21 }}>{item.menu}</Link>
                  )
                })
              }
              {/* <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/class" className='nav-link'>Class</Link>
            <Link to="/teacher" className='nav-link'>Teacher</Link>
            <Link to="/blog" className='nav-link'>Blog</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
           */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Navmenu
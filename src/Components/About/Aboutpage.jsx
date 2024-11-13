import React from 'react'
import Teachers from '../Home/Teachers'
import Ourparents from '../Home/Ourparents'
import Newsletter from '../Home/Newsletter'
import Features from '../Home/Features'
import About from '../Home/About'
import Whychoose from './Whychoose'
import Aboutreadcrums from './Aboutreadcrums'

function Aboutpage() {
  return (
    <>
    <Aboutreadcrums/>
  
    <Features />
    <About/>
    <Whychoose />
    <Teachers />
    <Ourparents />
    <Newsletter />


    </>
  )
}

export default Aboutpage
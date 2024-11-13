import React from 'react'
import Breadcrums from './Breadcrums'
import Newsletter from '../Home/Newsletter'
import Teachers from '../Home/Teachers'


function Teacher() {
  return (
    <>
    <Breadcrums props={"Teachers"} />
    <Teachers className="bg-white" />
    <Newsletter />
    </>
  )
}

export default Teacher
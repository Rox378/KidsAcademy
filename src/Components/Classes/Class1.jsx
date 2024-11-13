import React from 'react'

import Popularclass from '../Home/Popularclass'
import Newsletter from '../Home/Newsletter'
import Breadcrums from '../Teacherss/Breadcrums'

function Class1() {
  return (
    <>
      <Breadcrums props={"Classes"} />
      <Popularclass />
      <Newsletter />
    </>
  )
}

export default Class1
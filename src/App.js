import React, { useEffect } from 'react'
import Navmenu from './Components/Navmenu/Navmenu'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Footer1 from './Components/Footer/Footer1'
import Home from './Components/Home/Home'
import AOS from 'aos';
import Aboutpage from './Components/About/Aboutpage'



import './App.css'
import { Container } from 'react-bootstrap'
import Teachers from './Components/Home/Teachers'
import Blog from './Components/Blog/Blog'
import Class1 from './Components/Classes/Class1'
import Teacher from './Components/Teacherss/Teacher'

function App(){

  useEffect(()=>{
    AOS.init();
  },[])


  return (
    <>
     
     <Router>
     <Navmenu />
   
   
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<Aboutpage />}></Route>
      <Route path='/class' element = {<Class1 />}></Route>
      <Route path = '/teacher' element = {<Teacher />}></Route>
      <Route path = '/blog' element = {<Blog />}></Route>
      <Route path = '/contact' element ={<h1>Contact page</h1>}></Route>
      <Route path = '*' element ={<Container><h1>404 not found</h1></Container>}></Route>
    
     </Routes>

     <Footer1 />
     
     </Router>

    </>
  )
};

export default App

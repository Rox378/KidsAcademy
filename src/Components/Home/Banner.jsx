import React from 'react';
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const banner = [
    {
        image: "./img/banner_02.jpg",
        imgAlt: "banner1",
        h3text: " Welcome to Kids Academy",
        h2text: "Best for education",
        ptext: "  Lorem ipsum dolor sit amet consectetur Nulla vitae elit libero, a pharetra augue mollis interdum."

    },

    {
        image: "./img/banner_01.jpg",
        imgAlt: "banner2",
        h3text: "Welcome to kids academy.",
        h2text: "Best for education!",
        ptext: "Lorem ipsum dolor sit amet consectetur Nulla vitae elit libero, a pharetra augue mollis interdum."
    },

    {
        image: "./img/banner_05.jpg",
        imgAlt: "banner3",
        h3text: "Welcome to kids academy.",
        h2text: "Best for education!",
        ptext: "Lorem ipsum dolor sit amet consectetur Nulla vitae elit libero, a pharetra augue mollis interdum."
    },

    {
        image: "./img/banner_04.jpg",
        imgAlt: "banner4",
        h3text: "Welcome to kids academy.",
        h2text: "Best for education!",
        ptext: "Lorem ipsum dolor sit amet consectetur Nulla vitae elit libero, a pharetra augue mollis interdum."

    }
]






function Banner() {
    return (
        <section className='banner position-relative' >
            <Carousel>

                {
                    banner.map((item, index) => {
                        return (
                            <Carousel.Item interval={60000} key={index}>
                            <img src={item.image} alt={item.imgAlt} style={{ filter: "brightness(70%)" }} />
                            <Carousel.Caption className=' text-start' style={{top : "27%"}}>
                                <h3 className='ff-bubblegum fs-36 fs-22 fw-700' data-aos="fade-down">
                                    {item.h3text}
                                </h3>
                                <h2 className='ff-bubblegum fs-66 fs-32 fw-700' data-aos="zoom-in-up">{item.h2text}</h2>
                                <p className='text-white fs-5 mb-4 mb-sm-5' style={{maxWidth : "500px"}}>{item.ptext}</p>
                               <div data-aos = "file-up">
                               <Link to={"/Read more"} className=' bg-purple text-white py-3 px-4 px-sm-3 me-3 rounded'>Read more</Link>
                               <Link to={"/Buy now"} className='bg-warning text-white py-3 px-4 px-sm-3 me-3 rounded'>Buy now</Link>
                               </div>
        
        
                            </Carousel.Caption>
                        </Carousel.Item>
                        // <Carousel.Item interval={3000}>
                        //     <img src={"./img/banner_01.jpg"} alt="banner2" style={{ filter: "brightness(75%)" }} />
                        //     <Carousel.Caption className='text-start mt-5 translate-middle start-30 top-50'>
                        //         <h3 className='ff-bubblegum fs-36 fw-700'>Welcome to kids academy.</h3>
        
                        //         <h2 className='ff-bubblegum fs-66 fw-700'>Best for education!</h2>
                        //         <p className='text-white fs-5 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        //             Lorem ipsum dolor sit amet consectetur.
        
                        //         </p>
        
                        //         <Link to={"/Read more"} className='bg-purple text-white p-3 me-4 rounded'>Read more</Link>
                        //         <Link to={"/Buy now"} className='bg-warning text-white p-3 me-4 rounded'>Buy now</Link>
        
                        //     </Carousel.Caption>
                        // </Carousel.Item>
                        // <Carousel.Item interval={3000}>
                        //     <img src={"./img/banner_05.jpg"} alt="banner3" style={{ filter: "brightness(75%)" }} />
                        //     <Carousel.Caption className='text-start translate-middle mt-5 start-30 top-50'>
                        //         <h3 className='ff-bubblegum fs-36 fw-700'>Welcome to kids academy.</h3>
        
                        //         <h2 className='ff-bubblegum fs-66 fw-700'>Best for education!</h2>
                        //         <p className='text-white fs-5 mb-4'>
                        //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br />
                        //             Lorem ipsum dolor sit amet consectetur.
        
                        //         </p>
        
                        //         <Link to={"./Read more"} className='bg-purple text-white p-3 me-4 rounded'>Read more</Link>
                        //         <Link to={"./Buy now"} className='bg-warning text-white p-3 me-4 rounded'>Read more</Link>
        
        
                        //     </Carousel.Caption>
                        // </Carousel.Item>
                        // <Carousel.Item interval={3000}>
                        //     <img src={"./img/banner_04.jpg"} alt="banner4" style={{ filter: "brightness(75%)" }} />
                        //     <Carousel.Caption className='text-start translate-middle start-30 top-50 mt-5'>
                        //         <h3 className='ff-bubblegum fs-36 fw-700'>Welcome to kids academy.</h3>
                        //         <h2 className='ff-bubblegum fs-66 fw-700'>Best for education!</h2>
                        //         <p className='text-white fs-5 mb-4'>
                        //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        //         </p>
        
                        //         <Link to={"/Read more"} className='bg-purple text-white p-3 me-4 rounded'>Read more</Link>
        
                        //         <Link to={"/Buy now"} className='bg-warning text-white p-3 me-4 rounded'>Buy now</Link>
                        //     </Carousel.Caption>
                        // </Carousel.Item>
                        )
                    })
                };
            </Carousel>




        </section>

    )

}




export default Banner
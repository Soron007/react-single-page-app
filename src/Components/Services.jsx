

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Services = () => {
    return (
        <div >
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                interval={2000}
                showThumbs={false}
                showIndicators={false}
            >
                <div>
                    <img src={img1} alt="StuffNo1" />
                    <p className='legend'>Full Stack</p>
                </div>

                <div>
                    <img src={img2} alt="StuffNo2" />
                    <p className='legend'>Business to Business Support</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Services

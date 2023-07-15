import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerPic1 from '../../../assets/home/01.jpg'
import bannerPic2 from '../../../assets/home/02.jpg'
import bannerPic3 from '../../../assets/home/03.png'
import bannerPic4 from '../../../assets/home/04.jpg'
import bannerPic5 from '../../../assets/home/05.png'
import bannerPic6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={bannerPic1} />
            </div>
            <div>
                <img src={bannerPic2} />
            </div>
            <div>
                <img src={bannerPic3} />
            </div>
            <div>
                <img src={bannerPic4} />
            </div>
            <div>
                <img src={bannerPic5} />
            </div>
            <div>
                <img src={bannerPic6} />
            </div>
        </Carousel>
    );
};

export default Banner;

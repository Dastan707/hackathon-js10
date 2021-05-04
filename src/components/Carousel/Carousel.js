import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nike1 from '../../assets/images/just-do-it.jpg'
import Nike2 from '../../assets/images/just-do-it2.jpg'
import Nike3 from '../../assets/images/just-do-it3.jpg'

const MainCarousel = () => {
    return (
        <Carousel showThumbs={false}>
            <div>
                <img src={Nike1} alt="nike" />
            </div>
            <div>
                <img src={Nike2} alt="nike" />
            </div>
            <div>
                <img src={Nike3} alt="nike" />
            </div>
        </Carousel>
    );
};

export default MainCarousel;
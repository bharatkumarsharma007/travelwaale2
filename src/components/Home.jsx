import React from 'react';
import HomeImage from './assets/images/travelwaalehome.svg';
import Slidercommon from './Slidercommon';

const Home = () => {
    return (
        <>
        <Slidercommon sldrmainheading="Explore whole world with"
                      imgsrc={HomeImage} 
                      visit='/places'
                      btnname="Get Started" />
        </>
    ) 
}

export default Home;
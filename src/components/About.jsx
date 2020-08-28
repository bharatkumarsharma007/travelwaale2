import React from 'react';
import AboutImg from './assets/images/about.svg';
import Slidercommon from './Slidercommon';

const About = () => {
    return (
        <>
        <Slidercommon sldrmainheading="Welcome to About us"
                      imgsrc={AboutImg}
                      visit='/contact'
                      btnname="Contact Now" />
        </>
    )
}

export default About;
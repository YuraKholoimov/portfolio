import React from 'react';
import HeaderOfPage from "../UI/HeaderOfPage";
import CarouselSwiper from './Carousel/CarouselSwiper';
import s from "./Potrfolio.module.css"

const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <HeaderOfPage/>
            {/*<Carousel/>*/}
            <CarouselSwiper/>
        </div>
    );
};

export default Portfolio;
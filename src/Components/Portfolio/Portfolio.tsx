import React from 'react';
import CarouselSwiper from './Carousel/CarouselSwiper';
import s from "./potrfolio.module.css"
import PageTitlePortfolio from "../UI/PageTitlePortfolio/PageTitlePortfolio";


const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <div className={s.portfolio}>
                <PageTitlePortfolio subTitle={"Портфолио"} title={"Избранные проекты"}/>
                <CarouselSwiper/>
            </div>
        </section>
    );
};

export default Portfolio;
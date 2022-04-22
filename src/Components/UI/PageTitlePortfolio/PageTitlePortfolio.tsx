import React from 'react';
import s from "./pageTitlePortfolio.module.css";
import Arrow from "../Arrows/Arrow";
import CarouselSwiper from "../../Portfolio/Carousel/CarouselSwiper";

const PageTitle = () => {
    return (
        <div className={s.headerContent}>
            <div className={s.subTitle}>Introduction</div>
            <h3 className={s.title}>Front-end Developer</h3>
        </div>
    );
};

export default PageTitle;
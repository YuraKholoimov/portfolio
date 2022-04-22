import React from 'react';

import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import s from "./CarouselSwiper.module.css"

import 'swiper/css';
// import 'swiper/css/Navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/a11y';
// import 'swiper/css/autoplay';


import MyCard from '../Card/MyCard';
import Arrow from "../../UI/Arrows/Arrow";
import PageTitlePortfolio from "../../UI/PageTitlePortfolio/PageTitlePortfolio";

const CarouselSwiper = () => {
    return (
        <div className={s.swiper}>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={true}
                speed={1000}
                effect={"coverflow"}
                spaceBetween={50}
                slidesPerView={3}
                // Navigation
                loop
                grabCursor={true}
                // pagination={{clickable: true}}
                // scrollbar={{draggable: true}}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <div slot="container-start"
                     style={{
                         height: "80px",
                         // border: "1px solid"
                     }}
                >
                    <Arrow/>
                </div>

                <SwiperSlide><MyCard/></SwiperSlide>
                <SwiperSlide><MyCard/></SwiperSlide>
                <SwiperSlide><MyCard/></SwiperSlide>
                <SwiperSlide><MyCard/></SwiperSlide>
                <SwiperSlide><MyCard/></SwiperSlide>
                <SwiperSlide><MyCard/></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CarouselSwiper;
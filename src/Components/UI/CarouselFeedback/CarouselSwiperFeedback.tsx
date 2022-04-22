import React from 'react';

import Arrow from "../../UI/Arrows/Arrow";

import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import s from "./carouselSwiperFeedback.module.css"
import MyCard from '../../Portfolio/Card/MyCard';
// import 'swiper/css/Navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/a11y';
// import 'swiper/css/autoplay';

const CarouselSwiperFeedback = () => {
    return (
        <div className={s.swiper}>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={true}
                speed={1000}
                effect={"coverflow"}
                spaceBetween={50}
                slidesPerView={1}
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
                     }}>
                    <Arrow/>
                </div>

                <SwiperSlide>
                    <div className={s.feedback__card}>
                        <p>
                            “ Had a problem with the layout after Installation- found no approach. The support reacted
                            quickly and competently. And solved the problem between Elementor and a WordPress update.
                            Great! ”
                        </p>
                        <h3 className={s.title}>
                            Dana Aktins
                        </h3>
                        <h3 className={s.subtitle}>
                            Psicology
                        </h3>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CarouselSwiperFeedback;
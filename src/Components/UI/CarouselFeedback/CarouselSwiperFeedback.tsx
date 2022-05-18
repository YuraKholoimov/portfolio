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
                speed={2000}
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
                            “ Была проблема с авторизацией на сайте.
                            Юрий отреагировал быстро и грамотно, Большое спасибо! ”
                        </p>
                        <h3 className={s.title}>
                            Баксан Евгения
                        </h3>
                        <h3 className={s.subtitle}>
                            Личностный рост, Психолог
                        </h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.feedback__card}>
                        <p>
                            “ Благодаря профессионализму Юрия была найдена проблема в конфликте плагинов Wordpress.
                            Бастро отреагировал и починил мой сайт. Всегда знаю к кому можно обращаться за помощью. ”
                        </p>
                        <h3 className={s.title}>
                            Бакалым Сергей
                        </h3>
                        <h3 className={s.subtitle}>
                            Upgrade Innovations - строительная компания
                        </h3>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CarouselSwiperFeedback;
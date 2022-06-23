import React from 'react';

import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import s from "./CarouselSwiper.module.css"

import 'swiper/css';

import MyCard from '../Card/MyCard';
import Arrow from "../../UI/Arrows/Arrow";

type CarouselSwiperPropsType = {
    img?: { img: string, title: string, url: string, description: string, tech: string }[]
}
const CarouselSwiper: React.FC<CarouselSwiperPropsType> = ({img}) => {
    return (
        <div className={s.swiper}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={true}
                speed={1000}
                effect={"coverflow"}
                spaceBetween={40}
                slidesPerView={window.innerWidth > 1480 ? 3 : 2}
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

                {/*----- CARDS MAPING -----*/}

                {img?.map(el => {
                    return <SwiperSlide>
                        <MyCard
                            img={el.img}
                            title={el.title}
                            description={el.description}
                            url={el.url}
                            tech={el.tech}
                        />
                    </SwiperSlide>
                })}

            </Swiper>
        </div>
    );
};

export default CarouselSwiper;
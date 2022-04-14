import React from 'react';
import s from "./arrow.module.css"
import { useSwiper } from 'swiper/react'
const Arrow = () => {
    const swiper = useSwiper();
    return (
        <div className={s.arrowsContainer}>
            <div className={s.arrowsItems}>
                <div id={s.arrow_1} className={s.arrowWrapper}>
                    <div className={`${s.arrow} ${s.arrowLeft}`} onClick={() => swiper.slidePrev()}>
                        <span></span>
                    </div>

                    <div className={s.block}><h1></h1></div>

                    <div className={`${s.arrow} ${s.arrowRight}`} onClick={() => swiper.slideNext()}>
                        <span></span>
                    </div>

                    {/*</div>*/}
                    {/*<div id={s.arrow_2} className={s.arrowWrapper}>*/}
                    {/*    <div className={`${s.arrow} ${s.arrowLeft}`}>*/}
                    {/*        <span>Prev</span>*/}
                    {/*    </div>*/}

                    {/*    /!*<div className="block"><h1>Arrow 2</h1></div>*!/*/}

                    {/*    <div className={`${s.arrow} ${s.arrowRight}`}>*/}
                    {/*        <span>Next</span>*/}
                    {/*    </div>*/}
                </div>
            </div>
        </div>

    );
};

export default Arrow;
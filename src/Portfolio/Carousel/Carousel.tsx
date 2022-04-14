import React, {useRef} from 'react';
import s from "../Potrfolio.module.css"


const Carousel = () => {

    const refMap = useRef<any>(null)
    const refSlides = useRef<any>(null)

    const buttonsWrapper = refMap.current
    const slides = refSlides.current

    console.log(buttonsWrapper)
    console.log(slides)

const onClickHandler = (e: any) => {
    console.log(e.target)
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach((item: any) => {
            item.classList.remove("active")
        })
}
    // buttonsWrapper.addEventListener("click", (e: any) => {
    //     console.log(e.target)
    //     if (e.target.nodeName === "BUTTON") {
    //         Array.from(buttonsWrapper.children).forEach((item: any) =>
    //             item.classList.remove("active")
    //         );
    //         if (e.target.classList.contains("first")) {
    //             slides.style.transform = "translateX(-0%)";
    //             e.target.classList.add("active");
    //         } else if (e.target.classList.contains("second")) {
    //             slides.style.transform = "translateX(-33.33333333333333%)";
    //             e.target.classList.add("active");
    //         } else if (e.target.classList.contains('third')) {
    //             slides.style.transform = 'translatex(-66.6666666667%)';
    //             e.target.classList.add('active');
    //         }
    //     }
    }


    return (
        <div>
            <div className={s.center}>
                <div className={s.wrapper}>
                    <div className={s.inner}>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Product Design</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Custom Website</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                        <div className={s.card}>
                            <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png" alt={"Piscure"}/>
                                <div className={s.content}>
                                    <h1>Digital Marketing</h1>
                                    <h3>UI/UX, Design</h3>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={s.map} onClick={(e) => onClickHandler(e)}>
                    <button className={`${s.first}`}></button>
                    <button className={s.second}></button>
                    <button className={s.third}></button>
                </div>
            </div>
        </div>
);
};

export default Carousel;


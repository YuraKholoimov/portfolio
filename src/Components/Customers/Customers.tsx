import React from 'react';
import PageTitlePortfolio from "../UI/PageTitlePortfolio/PageTitlePortfolio";

import s from "./customers.module.css"
import CarouselSwiperFeedback from "../UI/CarouselFeedback/CarouselSwiperFeedback";

const Customers = () => {
    return (
        <section id="customers">
            <div className={s.container}>
                {/*--- Customers Title ---*/}
                <PageTitlePortfolio/>
                <div className={s.customers__partners}>
                    <ul>
                        <li>
                            <a href="https://upgradefor.com/" target={"_blank"}>
                                <img src="https://upgradefor.com/wp-content/uploads/2021/08/Logo_upgradefor.png"
                                     alt="LOGO"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://upgradefor.com/" target={"_blank"}>
                                <img src="https://upgradefor.com/wp-content/uploads/2021/08/Logo_upgradefor.png"
                                     alt="LOGO"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={s.customer__feedback}>
                    <div className={s.nav__buttons}></div>
                    <div className={s.carousel}>
                        <CarouselSwiperFeedback/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Customers;
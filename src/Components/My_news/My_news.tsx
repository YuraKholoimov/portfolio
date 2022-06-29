import React from 'react';
import s from "./my_news.module.css"
import PageTitlePortfolio from "../UI/PageTitlePortfolio/PageTitlePortfolio";
import {BigButton} from "../UI/BigButton/BigButton";

const MyNews = () => {
    const img_1 = require ('../../Assets/IMG/News/img1.jpg')
    const img_2 = require ('../../Assets/IMG/News/Emerging-web-design-trends-for-2021.jpeg')
    const img_3 = require ('../../Assets/IMG/News/img3.jpg')

    return (
        <section id={"my_news"}>
            <div className={s.container}>
                <PageTitlePortfolio title={"Последние статьи"} subTitle={"Новости и советы"}/>

                <div className={s.blog_list}>

                    <div className={s.blog_card}>
                        <div className={s.card_img}>
                            <img src={img_1} alt="IMG" />
                        </div>
                        <div className={s.item_title}>
                            <p>Сунтября 22, 2021</p>
                            <h3><a href="">Пять убедительных доказательств того,
                                что посещение дизайнера полезно для вашего карьерного роста.</a>
                            </h3>
                        </div>
                    </div>

                    <div className={s.blog_card}>
                        <div className={s.card_img}>
                            <img src={img_3} alt="IMG" />
                        </div>
                        <div className={s.item_title}>
                            <p>Сунтября 22, 2021</p>
                            <h3><a href="">
                                Web-сервисы который помогают идти в ногу со временем,
                                мессенджеры, облачные хранилища, кино-новинки, музыка...
                            </a>
                            </h3>
                        </div>
                    </div>

                    <div className={s.blog_card}>
                        <div className={s.card_img}>
                            <img src={img_2} alt="IMG" />
                        </div>
                        <div className={s.item_title}>
                            <p>Сунтября 22, 2021</p>
                            <h3><a href="">
                                Современый код, библиотеки, технологии и новый инструментарий,
                                который позволяет писать код качественнее не теряя во времени.
                            </a>
                            </h3>
                        </div>
                    </div>
                </div>

                {/*----- LOAD MORE CARDS -----*/}
                <BigButton>Показать еще</BigButton>
            </div>
        </section>
    );
};

export default MyNews;
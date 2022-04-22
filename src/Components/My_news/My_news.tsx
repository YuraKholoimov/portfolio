import React from 'react';
import s from "./my_news.module.css"
import PageTitlePortfolio from "../UI/PageTitlePortfolio/PageTitlePortfolio";
import {Card, CardContent, CardMedia, Paper} from "@mui/material";

const MyNews = () => {
    const img_1 = 'https://frenify.net/envato/frenify/html/resumo/1/img/blog/1.jpg'
    const img_2 = 'https://frenify.net/envato/frenify/html/resumo/1/img/blog/4.jpg'
    const img_3 = 'https://frenify.net/envato/frenify/html/resumo/1/img/blog/3.jpg'

    return (
        <section id="my_news">
            <div className={s.container}>
                <PageTitlePortfolio/>

                <div className={s.blog_list}>

                    <div className={s.blog_card}>
                        <div className={s.card_img}>
                            <img src={img_1} alt="IMG" />
                        </div>
                        <div className={s.item_title}>
                            <p>Сунтября 22, 2021</p>
                            <h3><a href="">Пять убедительных доказательств того, что посещение дизайнера полезно
                                для вашего карьерного роста.</a>
                            </h3>
                        </div>
                    </div>

                    <div className={s.blog_card}>
                        <div className={s.card_img}>
                            <img src={img_3} alt="IMG" />
                        </div>
                        <div className={s.item_title}>
                            <p>Сунтября 22, 2021</p>
                            <h3><a href="">Пять убедительных доказательств того, что посещение дизайнера полезно
                                для вашего карьерного роста.</a>
                            </h3>
                        </div>
                    </div>

                    <div className={s.blog_card}>
                        <div className={s.card_img}>
                            <img src={img_2} alt="IMG" />
                        </div>
                        <div className={s.item_title}>
                            <p>Сунтября 22, 2021</p>
                            <h3><a href="">Пять убедительных доказательств того, что посещение дизайнера полезно
                                для вашего карьерного роста.</a>
                            </h3>
                        </div>
                    </div>

                    <div className={s.load_more}>
                        <a href="#" className={s.done}>
                            <span className={s.link_text}>Показать еще</span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MyNews;
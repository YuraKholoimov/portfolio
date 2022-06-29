import React from 'react';
import CarouselSwiper from './Carousel/CarouselSwiper';
import s from "./potrfolio.module.css"
import PageTitlePortfolio from "../UI/PageTitlePortfolio/PageTitlePortfolio";

const Portfolio = () => {
    const img = [
        {
            img: require("../../Assets/IMG/Projects/todo.png"),
            title: 'Trello',
            url: "https://yurakholoimov.github.io/task-board/",
            description: "Программа для планирования задач",
            tech: "TypeScript, React, Redux Toolkit, Thunk, Axios, Git, MUI",
        },
        {
            img: require("../../Assets/IMG/Projects/cards.png"),
            title: 'Cards for learning',
            url: "https://yurakholoimov.github.io/cards-front-2.0/",
            description: "Тематические колоды карт для обучения",
            tech: "TypeScript, React, Redux Toolkit, Thunk, Axios, Git",
        },
        {
            img: require("../../Assets/IMG/Projects/social.png"),
            title: 'Cosial network',
            url: "https://yurakholoimov.github.io/itIncubatorNetwork/",
            description: "Социальная сеть",
            tech: "TypeScript, React, Redux Toolkit, Thunk, Axios, Git, Bootstrap",
        },
        {
            img: require("../../Assets/IMG/Projects/catsMarket.png"),
            title: 'Cats market templates',
            url: "https://yurakholoimov.github.io/catsMarket/",
            description: "Шаблон интернет магазина",
            tech: "JavaScript, HTML, CSS",

        },
        {
            img: require("../../Assets/IMG/Projects/tracker-dashboard"),
            title: 'Tracking dashboard',
            url: "https://tracking-dashboard-h3mzgsrpe-yurakholoimov.vercel.app/",
            description: "Шаблон трекера",
            tech: "JavaScript, HTML, CSS",
        },
        {
            img: require("../../Assets/IMG/Projects/healthyFood.png"),
            title: 'Healthy Food',
            url: "https://yurakholoimov.github.io/healthyFood/",
            description: "Шаблон сайта правильного питания с расчетом каллорий",
            tech: "JavaScript, HTML, CSS",
        },
    ]

    return (
        <section id={"portfolio"}>
            <div className={s.portfolio}>
                <PageTitlePortfolio subTitle={"Портфолио"} title={"Избранные проекты"}/>
                <CarouselSwiper img={img}/>
            </div>
        </section>
    );
};

export default Portfolio;


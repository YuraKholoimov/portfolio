import React from 'react';
import s from "./pageTitle.module.css";

const PageTitle = () => {
    return (
        <div className={s.headerContent}>
            <div className={s.subTitle}>Introduction</div>
            <h3 className={s.title}>Front-end Developer</h3>
            <div className={s.headerLine}></div>
            <p className={s.description}>
                Я проектирую и разрабатываю услуги для клиентов всех размеров, специализируясь на создании стильных,
                современных веб-сайтов, веб-сервисов и интернет-магазинов.
            </p>
        </div>
    );
};

export default PageTitle;
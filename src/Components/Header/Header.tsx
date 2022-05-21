import React from 'react';
import s from "./header.module.css"
import PageTitle from "../UI/PageTitle";

const Header = () => {
    const description = "Я проектирую и разрабатываю услуги для клиентов всех размеров, специализируясь на создании стильных, " +
        "современных веб-сайтов, веб-сервисов и интернет-магазинов."
    return (
        <header id="home">
            <div className={s.header}>
                {/*--- Main Title Block ---*/}
                {/*<div className={s.header_title}>*/}
                    <PageTitle title={"Front-end Developer"} subTitle={"Вступление"} description={description}/>
                {/*</div>*/}
                <div className={s.signature}>
                    <img src="" alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;
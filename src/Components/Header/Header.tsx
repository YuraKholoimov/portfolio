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
                <PageTitle title={"Front-end Developer"} subTitle={"Вступление"} description={description}/>
                <div className={s.signature}>
                    {/*<img src="https://frenify.net/envato/frenify/html/resumo/1/img/signature.png" alt=""/>*/}
                    <img src={"../../Assets/signature.png"} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;
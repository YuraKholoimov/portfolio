import React from 'react';
import s from "./services.module.css"
import PageTitle from "../UI/PageTitle";
import Card_service from "../UI/Card_service/Card_service";

const Services = () => {
    const description = "Я помогаю таким амбициозным компаниям, как ваша, получать больше прибыли за счет повышения осведомленности, привлечения веб-трафика, установления контактов с клиентами и увеличения общих продаж."
    return (
        <section id="services">
            <div className={s.container}>
                {/*--- Main Title ---*/}
                <PageTitle subTitle={"Услуги"} title={"Что я делаю"} description={description}/>
                <div className={s.service__list}>
                    {/*--- My services & Price---*/}
                    <Card_service/>
                    <Card_service/>
                    <Card_service/>
                </div>
            </div>
        </section>
    );
};

export default Services;
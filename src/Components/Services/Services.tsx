import React from 'react';
import s from "./services.module.css"
import PageTitle from "../UI/PageTitle";
import {CardService} from "../UI/Card_service/CardService";

const Services = () => {
    const description = "Я помогаю таким амбициозным компаниям, как ваша, получать больше прибыли " +
        "за счет повышения осведомленности, привлечения веб-трафика, установления контактов с " +
        "клиентами и увеличения общих продаж."

    const data = [
        {
            service: "Сайт визитка",
            description: "Идеальное решение заявить о себе.",
            price: "5000"
        },
        {
            service: "Сайт портфолио",
            description: "Дизайна и разработки со свежим и современными взглядом.",
            price: "12000"
        },
        {
            service: "Многостраничный сайт",
            description: "Сайт с большим колличеством информации, с самостоятельным функционалом по ведению " +
                "и обслуживнию.",
            price: "32000"
        },
    ]
    return (
        <section id={"services"}>
            <div className={s.container}>

                {/*--- Main Title ---*/}
                <PageTitle subTitle={"Услуги"} title={"Что я делаю"} description={description}/>
                <div className={s.service__list}>

                    {/*--- My services & Price---*/}
                    {
                        data.map((item, i) => {
                            return <CardService
                                key={i}
                                service={item.service}
                                description={item.description}
                                price={item.price}
                            />
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;
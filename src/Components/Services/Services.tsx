import React from 'react';
import s from "./services.module.css"
import PageTitle from "../UI/PageTitle";
import Card_service from "../UI/Card_service/Card_service";

const Services = () => {
    return (
        <section id="services">
            <div className={s.container}>
                {/*--- Main Title ---*/}
                <PageTitle/>
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
import React from 'react';
import s from "./experience.module.css";
import {CardAbout} from "../../UI/CardAbout/CardAbout";

const Experience = () => {
    const data = [
        {
            position: 'Front-end разработчик',
            title: 'Mobirise.com',
            date: '(2021 - н.в.)',
            description: 'Разработка виджетов известных приложений, модулей для различных видов шаблонов конструктора сайтов, на React TS, JavaScript, CSS. Работа с анимацией. Оптимизация постраничного вывода JSX-элементов используюя hook-oв, создание элементов админ понели.\n' +
                'Поиск и дебаг долгого общения приложения с сервером,\n' +
                'Unit-testing компонент.',
        },
        {
            position: 'Front-end разработчик',
            title: 'Freelance',
            date: '(2005 - 2009)',
            description: 'Разработка приложения вида листа учета для учебного центра на React TS/ Redux и Material UI; рефакторинг готового кода; создание виджетов пероснала, студентов для CRM. Оптимизировал React приложения использую нативную мемоизацию, HOC и архитектурные приемы. Создание сложны форм, с сортировками и поиском',
        },
        {
            position: 'Старший бортпроводник',
            title: 'ПАО Аэрофлот',
            date: '(2015 - 2021)',
            description: 'Обеспечение безопсности и предоставление сервисных услуг на борту воздушного судна.',
        },
    ]
    return (
        <div className={s.experienceContainer}>
            {
                data.map((item, index) => {
                    return (
                        <CardAbout
                            key={index}
                            position={item.position}
                            title={item.title}
                            date={item.date}
                            description={item.description}
                        />)
                })
            }
        </div>
    );
};

export default Experience;
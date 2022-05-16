import React from 'react';
import s from "./cardAbout.module.css";

type CardAboutPropsType = {
    position: string
    title: string
    date: string
    description: string
}
export const CardAbout = ({position, title, date, description}: CardAboutPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.cardTitle}>
                    <h5>{title}</h5><span>{date}</span>
                </div>
                <div className={s.cardPosition}>
                    <h3>{position}</h3>
                </div>
                <div  className={s.cardDescription}>{description}</div>
            </div>
        </div>
    );
};
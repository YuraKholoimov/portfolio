import React from 'react';
import s from "./card_service.module.css";

export const CardService = (props: PropsType) => {
    return (
        <div>
            <div className={s.services__card}>
                <div className={s.card_left}>

                    <h3>{props.service}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={s.card_right}>
                    <p>Starts from</p>
                    <h3>{props.price}</h3>
                </div>
            </div>
        </div>
    );
};

type PropsType = {
    service: string
    description: string
    price: string
}


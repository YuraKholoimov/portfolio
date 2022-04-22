import React from 'react';
import s from "./card_service.module.css";

const CardService = () => {
    return (
        <div>
            <div className={s.services__card}>
                <div className={s.card_left}>
                    <h3>Web-site portfolio</h3>
                    <p>Desine and pevelopment portfolio with fresh and strong view.</p>
                </div>
                <div className={s.card_right}>
                    <p>Starts from</p>
                    <h3>$100</h3>
                </div>
            </div>
        </div>
    );
};

export default CardService;
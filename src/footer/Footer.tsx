import React from 'react';
import s from "./footer.module.css"

const Footer = () => {
    return (
        <div className={s.container}>

            <div className={s.items}>
                <button className={s.arrowUp}>up</button>
                <div>Copyright © 2021. All rights reserved.</div>
                <div>Designed & Developed by Frenify</div>
            </div>
        </div>
    );
};

export default Footer;
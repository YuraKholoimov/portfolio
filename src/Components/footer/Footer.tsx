import React from 'react';
import s from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={"footer"}>
            <div className={s.footer_top}><a href="#home"></a></div>
            <div className={s.arrow_block}>
                <a href="#" className={s.link_arrow}>
                    <span></span>
                </a>
            </div>
            <div className={s.container}>
                <div className={s.footer_content}>
                    <p>Copyright © 2021. All rights reserved.</p>
                    <p>Designed
                        <a  href="https://frenify.com/" target="_blank"> Frenify </a>
                        & Developed by Kholoimov
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import s from "./footer.module.css"
import {onHandlerSmoothScroll} from "../../Utils/OnHandlerRefSmoothScroll";

const Footer = () => {
    return (
        <footer id={"footer"}>
            <div className={s.footer_top}>
                <a href="#"></a>
            </div>
            <div className={s.arrow_block}>
                {/*<Link>*/}
                    <a href="#" className={s.link_arrow}
                       onClick={(e) => onHandlerSmoothScroll(e, "home")}>
                    <span></span>
                </a>
                {/*</Link>*/}
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
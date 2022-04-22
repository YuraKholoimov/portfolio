import React, {useState} from 'react';
import s from "./sideBar.module.css"
import Navigation from "../Navigation/Navigation";


const SideBar = () => {
    return (
        <div className={s.sidebar}>

            {/*--- Menu Button ---*/}
            <a href="#" className={s.menu_trigger}>
                <span className={s.text}>Menu</span>
                <span className={s.hamburger}>
                    <span></span><span></span><span></span>
                </span>
            </a>

            {/*--- Content Sidebar---*/}
            <div className={s.sidebar_in}>
                <div className={s.sidebar_top}>
                    <div className={s.sidebar_border_1}></div>
                    <div className={s.sidebar_border_2}></div>
                    {/*--- img ---*/}
                    <div className={s.img_holder}>
                        <img src="https://frenify.net/envato/frenify/html/resumo/1/img/thumb/square.jpg" alt="SQUARE"/>
                        <div className={s.abs_img}></div>
                    </div>
                {/* --- title --- */}
                    <div className={s.title_holder}>
                        <h5>Hi there! I am</h5>
                        <h3>
                            <span className={s.animated_title}>

                            </span>
                            Front-end developer
                        </h3>
                    </div>
                </div>
                <div className={s.sidebar_bottom}>
                    <a href="#contact">
                        <span className={s.circle}></span>
                        <span className={s.text}>

                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
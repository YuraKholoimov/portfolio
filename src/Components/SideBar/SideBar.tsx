import React, {SetStateAction, useState} from 'react';
import s from "./sideBar.module.css"
import {Navigation} from "./Navigation";

type SideBarPropsType = {
    isVisible: boolean
    isOpenMenu: boolean
    setIsOpenMenu: React.Dispatch<SetStateAction<boolean>>
}
const SideBar = (props: SideBarPropsType) => {
    return (
        <div className={props.isVisible ? `${s.sidebar}` : `${s.sidebar2}`}>


            {/*----- Content Sidebar -----*/}
            <div className={s.sidebar_in}>

                {/*<a href="" className={s.menu_trigger}>*/}
                {/*    <span className={s.text}>Menu</span>*/}
                {/*    <span className={s.hamburger}>*/}
                {/*        <span></span><span></span><span></span>*/}
                {/*        </span>*/}
                {/*</a>*/}
                {/*----- Right Hidden Navigation -----*/}
                <Navigation isOpenMenu={props.isOpenMenu} setIsOpenMenu={props.setIsOpenMenu} isVisible={props.isVisible}/>
                <div className={ props.isVisible ? `${s.sidebar_top}` : `${s.sidebar_top2}`}>

                    <div className={s.sidebar_border_1}></div>
                    <div className={s.sidebar_border_2}></div>
                    {/*----- IMG -----*/}
                    <div className={s.img_holder}>
                        <img src="https://frenify.net/envato/frenify/html/resumo/1/img/thumb/square.jpg" alt="SQUARE"/>
                        <div className={s.abs_img}></div>
                    </div>
                {/* ----- Title IMG  ----- */}
                    <div className={s.title_holder}>
                        <h5>Привет, я </h5>
                        <h3>Front-end developer
                            <span className={s.animated_title}></span>
                        </h3>
                    </div>
                </div>
                {/* ----- SideBar Contacts ----- */}
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
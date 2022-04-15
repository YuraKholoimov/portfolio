import React, {useState} from 'react';
import s from "./SideBar.module.css"
import Navigation from "../navigation/Navigation";


const SideBar = () => {
    return (
        <div className={s.sidebar}>

            <Navigation/>

            <div className={s.sidebarContainer}>
                <div className={s.sidebarPhoto}>
                    <div className={s.sidebarPhotoX}></div>
                    <div className={s.sidebarPhotoY}></div>
                    xsxa
                </div>
            </div>
        </div>
    );
};

export default SideBar;
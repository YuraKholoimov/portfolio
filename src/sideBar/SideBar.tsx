import React, {useState} from 'react';
import s from "./SideBar.module.css"
import Navigation from "../navigation/Navigation";


const SideBar = () => {
    const [scroll, setScroll] = useState(0)

    window.addEventListener("scroll", () => {

        if (window.scrollY > 0) {
            setScroll(window.scrollY)
        } else if (window.scrollY === 0) {
            setScroll(window.scrollY)
        }

    })



    return (
        <div className={scroll > 0 ? `${s.sidebarScroll}` : `${s.sidebar}`}>

            <Navigation/>

            <div className={s.sidebarContainer}>
                <div className={s.sidebarPhoto}>
                    <div className={s.sidebarPhotoX}></div>
                    <div className={s.sidebarPhotoY}></div>

                </div>


            </div>


        </div>
    );
};

export default SideBar;
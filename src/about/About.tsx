import React from 'react';
import s from "./About.module.css"
import HeaderOfPage from "../UI/HeaderOfPage";
import {NavLink, Route, Routes} from 'react-router-dom';
import Experience from './Experience';
import Skills from "./Skills";
import Education from "./Education";

const About = () => {

    return (
        <div className={s.about}>

            <HeaderOfPage/>

            <div className={s.biographyItem}>
                <div>
                    <p>NAME</p>
                    <p>BIRTHDAY</p>
                    <p>AGE</p>
                    <p>ADDRESS</p>
                    <p>PHONE</p>
                    <p>EMAIL</p>
                </div>

                <div>
                    <p>Yuriy Kholoimov</p>
                    <p>22th Desember 1986</p>
                    <p>35 years</p>
                    <p>Moscow</p>
                    <p>+7 (977) 264 1610</p>
                    <p>yurakholoimov@ya.ru</p>
                </div>

                <div>
                    <img src="" alt=""/>
                    <input type="file"/>
                </div>

            </div>

            <div className={s.aboutCardsContainer}>

                <div className={s.links}>
                    <NavLink to={"/experience"}
                             style={({isActive}) => ({color: isActive ? "#977750" : "black"})}
                    >Experience
                    </NavLink>
                    <div className={s.solidStick}/>

                    <NavLink to={"/education"}
                             style={({isActive}) => ({color: isActive ? "#977750" : "black"})}
                    >Education
                    </NavLink>
                    <div className={s.solidStick}/>

                    <NavLink to={"/skills"}
                             style={({isActive}) => ({color: isActive ? "#977750" : "black"})}
                    >Skills
                    </NavLink>
                </div>

                <div className={s.aboutCards}>
                    <Routes>
                        <Route path={'/experience'} element={<Experience/>}/>
                        <Route path={'/education'} element={<Education/>}/>
                        <Route path={'/skills'} element={<Skills/>}/>
                    </Routes>
                </div>

            </div>
        </div>
    );
};

export default About;
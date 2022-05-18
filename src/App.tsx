import React, {useRef, useState} from 'react';
import About from './Components/About/About';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import useElementOnScreen from "./Hooks/useElementOnScreen";
import Services from "./Components/Services/Services";
import Customers from './Components/Customers/Customers';
import My_news from "./Components/My_news/My_news";
import s from "./Components/SideBar/sideBar.module.css";
import {Closer} from "./Components/UI/Closer/Closer";

function App() {
    const observer = useRef(null)
    const isVisible = useElementOnScreen(observer) // return boolean to change width

    const [isOpenMenu, setIsOpenMenu] = useState(true)

    const menuToggleHandler = (e: any) => {
        e.preventDefault()
        setIsOpenMenu(!isOpenMenu)
    }
    return (
        <div className="App">
            {/*----- Observer Block-----*/}
            <div style={{height: "10px"}} ref={observer}></div>

            {/*----- Menu Button -----*/}
            {!isOpenMenu &&  <a href="" className={s.menu_trigger} onClick={menuToggleHandler}>
                <span className={s.text}>Menu</span>
                <span className={s.hamburger}>
                <span></span><span></span><span></span>
            </span>
            </a>}

            {/*----- Content -----*/}
            <div className={isVisible ? "container1" : "container2"}>
                <div className="pages">
                    <Header/>
                    <About/>
                    <Portfolio/>
                    <Services/>
                    <Customers/>
                    <My_news/>
                    <Contact/>
                </div>
                <Footer/>
            </div>

            {/*----- SideBar -----*/}
            <SideBar isVisible={isVisible} isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
        </div>
    );
}

function ButtonMenu({callBack}: any) {
    return (
        <a href="" className={s.menu_trigger} onClick={callBack}>
            <span className={s.text}>Menu</span>
            <span className={s.hamburger}>
                <span></span><span></span><span></span>
            </span>
        </a>
    )
}


export default App;

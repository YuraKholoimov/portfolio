import React, {useState} from 'react';
import About from './about/About';
import './App.css';
import Header from './header/Header';
import SideBar from "./sideBar/SideBar";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import CarouselSwiper from "./Portfolio/Carousel/CarouselSwiper";
import Arrow from "./UI/Arrows/Arrow";

function App() {

    return (
        <div className={"App"}>
            <div className="container">
                <div className={"Main"}>
                    <Header/>
                    <About/>
                    <Portfolio/>
                    <Contact/>
                    <Footer/>

                </div>
            </div>

            <SideBar/>
        </div>
    );
}

export default App;

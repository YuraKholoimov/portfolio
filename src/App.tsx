import React, {useEffect, useRef} from 'react';
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

function App() {
    const observer = useRef(null)
    const isVisible = useElementOnScreen(observer) // return boolean to change width

    return (
        <div className="App">
            <div style={{
                height: "10px",
                width: "100%",
                position: "absolute",
                backgroundColor: "green"
            }} ref={observer}></div>
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
            <SideBar/>
        </div>
    );
}

export default App;

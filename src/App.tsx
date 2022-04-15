import React, {useState} from 'react';
import About from './about/About';
import './App.css';
import Header from './header/Header';
import SideBar from "./sideBar/SideBar";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Portfolio from "./Portfolio/Portfolio";

function App() {
    const [scroll, setScroll] = useState(0)

    window.addEventListener("scroll", () => {

        if (window.scrollY > 0) {
            setScroll(window.scrollY)
        } else if (window.scrollY === 0) {
            setScroll(window.scrollY)
        }

    })
    return (
        <div className="App">
            <div className={scroll ? "container2" : "container1" }>
                <div className="Main">
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

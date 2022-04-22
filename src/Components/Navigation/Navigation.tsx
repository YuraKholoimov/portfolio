import React, {useState} from 'react';
import s from "./navigation.module.css"

const Navigation = () => {
    const [show, setShoe] = useState(false)
    return (
        <div className={s.navigation}>
            {!show && <button className={s.menuBtn} onClick={() => setShoe(!show)}>menu</button>}
            {
                show
                    ? <div className={s.menu}>
                        <div className={s.menuCloseBtn}>
                            <button onClick={() => setShoe(!show)}>Close</button>
                        </div>
                        <div className={s.menuBlock}>
                            <h3>MENU</h3>
                            <a href="src/Components/navigation/Navigation">Home</a>
                            <a href="src/Components/navigation/Navigation">About</a>
                            <a href="src/Components/navigation/Navigation">Portfolio</a>
                            <a href="src/Components/navigation/Navigation">Services</a>
                            <a href="src/Components/navigation/Navigation">Customers</a>
                            <a href="src/Components/navigation/Navigation">News & Tips</a>
                            <a href="src/Components/navigation/Navigation">Contact</a>
                        </div>
                    </div>
                    : <div className={s.menuOut}></div>
            }
        </div>

    );
};

export default Navigation;
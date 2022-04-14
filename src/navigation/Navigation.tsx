import React, {useState} from 'react';
import s from "./Navigation.module.css"

const Navigation = () => {
    const [show, setShoe] = useState(false)
    return (
        <div className={s.navigation}>
            {!show && <button className={s.menuBtn} onClick={() => setShoe(!show)}>menu</button>}
            {
                show
                    ? <div className={s.menu}>
                        <div className={s.menuCloseBtn}>
                            <button  onClick={() => setShoe(!show)}>Close</button>
                        </div>
                        <div className={s.menuBlock}>
                            <h3>MENU</h3>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Portfolio</a>
                            <a href="">Services</a>
                            <a href="">Customers</a>
                            <a href="">News & Tips</a>
                            <a href="">Contact</a>
                        </div>


                    </div>
                    : <div className={s.menuOut}>

                    </div>
            }
        </div>

    );
};

export default Navigation;
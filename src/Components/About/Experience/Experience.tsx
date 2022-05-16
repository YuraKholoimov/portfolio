import React from 'react';
import s from "./experience.module.css";

const Experience = () => {
    return (
        <div className={s.experienceContainer}>
            <div className={s.experienceCard}>
                <div className={s.experienceCardTitle}>
                    <h5>FRENIFY LLC</h5><span>( 2018 — Today )</span>
                </div>
                <div className={s.experienceCardPosition}>
                    <h3>Sr. Front-end Engineer</h3>
                </div>
                <div  className={s.experienceCardDescription}>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </div>
            </div>

            <div className={s.experienceCard}>
                <div className={s.experienceCardTitle}>
                    <h5>FRENIFY LLC</h5><span>( 2018 — Today )</span>
                </div>
                <div className={s.experienceCardPosition}>
                    <h3>Sr. Front-end Engineer</h3>
                </div>
                <div  className={s.experienceCardDescription}>
                        Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                </div>
            </div>

            <div className={s.experienceCard}>
                <div className={s.experienceCardTitle}>
                    <h5>FRENIFY LLC</h5><span>( 2018 — Today )</span>
                </div>
                <div className={s.experienceCardPosition}>
                    <h3>Sr. Front-end Engineer</h3>
                </div>
                <div className={s.experienceCardDescription}>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
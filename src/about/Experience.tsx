import React from 'react';
import s from "./Experience.module.css";

const Experience = () => {
    return (
        <div className={s.experienceContainer}>
            <div className={s.experienceCard}>
                <div className={s.experienceCardTitle}>
                    <span>FRENIFY LLC</span><span>( 2018 — Today )</span>
                </div>
                <div className={s.experienceCardPosition}>Sr. Front-end Engineer</div>
                <div  className={s.experienceCardDescription}>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </div>

            </div>

            <div className={s.experienceCard}>
                <div className={s.experienceCardTitle}>
                    <span>FRENIFY LLC</span><span>( 2018 — Today )</span>
                </div>
                <div className={s.experienceCardPosition}>Sr. Front-end Engineer</div>
                <div  className={s.experienceCardDescription}>
                        Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                </div>
            </div>

            <div className={s.experienceCard}>
                <div className={s.experienceCardTitle}>
                    <span>FRENIFY LLC</span><span>( 2018 — Today )</span>
                </div>
                <div className={s.experienceCardPosition}>Sr. Front-end Engineer</div>
                <div className={s.experienceCardDescription}>
                    Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </div>
            </div>
        </div>
    );
};

export default Experience;
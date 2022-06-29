import React from 'react';
import InputRange from "../../UI/InputRange/InputRange";

import s from "./skills.module.css"

const Skills = () => {
    return (
        <div className={s.progressItem}>
            <h3 className={s.progressTitle}>React TS / Redux (Toolkit)</h3>
            <InputRange value={90}/>
            <h3 className={s.progressTitle}>JavaScript </h3>
            <InputRange value={80}/>
            <h3 className={s.progressTitle}>TDD / Jest / Storybook</h3>
            <InputRange value={70}/>
            <h3 className={s.progressTitle}>Axios / REST API</h3>
            <InputRange value={90}/>
            <h3 className={s.progressTitle}>Formik / Redux-form</h3>
            <InputRange value={80}/>
            <h3 className={s.progressTitle}>HTML & CSS / SCSS</h3>
            <InputRange value={80}/>
            <h3 className={s.progressTitle}>Git / Github</h3>
            <InputRange value={70}/>
            <h3 className={s.progressTitle}>BEM / Bootstrap / Material UI</h3>
            <InputRange value={70}/>
                <br/>
                <br/>
            <h3 className={s.progressTitle}>Английский язык</h3>
            <InputRange value={'B2'}/>
        </div>
    );
};

export default Skills;
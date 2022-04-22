import React from 'react';
import InputRange from "../../UI/InputRange/InputRange";

import s from "./skills.module.css"
const Skills = () => {
    return (
        <div className={s.progressItem}>
            <h3 className={s.progressTitle}>React TS</h3>

            <InputRange/>

        </div>
    );
};

export default Skills;
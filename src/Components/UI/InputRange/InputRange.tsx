import React, {useRef, useState} from 'react';

import s from "./InputRange.module.css"

const InputRange = () => {
    let [valTooltip, setValTooltip] = useState<any>(90)

    const onInputCallback = (e: any) => {
        let max = e.currentTarget.max
        let value = e.currentTarget.value

        setValTooltip((value / max) * 100)
    }

    return (
        <div className={s.container}>

            <input type="range" max="100" value={`${valTooltip}`} className={s.inp} onInput={onInputCallback}/>

            <div className={s.sliderThumb}>
                <div className={s.tooltip} style={{left: `${valTooltip}%`}}>{`${valTooltip}%`}</div>
            </div>
        </div>
    );
};

export default InputRange;
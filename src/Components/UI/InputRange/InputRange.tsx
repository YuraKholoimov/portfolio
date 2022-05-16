import React, {useRef, useState} from 'react';

import s from "./InputRange.module.css"

type InputRangePropsType = {
    value: number | string
}

const InputRange = ({value}: InputRangePropsType) => {
    let [valTooltip, setValTooltip] = useState<number | string>(value)

    const onInputCallback = (e: any) => {
        let max = e.currentTarget.max
        let value = e.currentTarget.value

        setValTooltip((value / max) * 100)
    }

    return (
        <div className={s.container}>

            <input type="range" max="100" value={`${valTooltip}`} className={s.inp} onInput={onInputCallback}/>

            <div className={s.sliderThumb}>
                <div className={s.tooltip} style={{left: `${valTooltip}%`}}>
                    {typeof valTooltip === "number" ? `${valTooltip}%` : value}
                </div>
            </div>
        </div>
    );
};

export default InputRange;
import ReactTypingEffect from 'react-typing-effect';
import s from "./cursor.module.css"

export const ReactTypingEffectDemo = () => {
    return (
        <>
            <ReactTypingEffect
                text={["Front-end разработчик"]}
                cursor={"|"}
                cursorClassName={s.cursor}
                // displayTextRenderer={(text, i) => {
                //     return (
                //         <h1>
                //             {text.split('').map((char, i) => {
                //                 const key = `${i}`;
                //                 return (
                //                     <span
                //                         key={key}
                //                         style={i%2 === 0 ? { color: 'magenta'} : {}}
                //                     >{char}</span>
                //                 );
                //             })}
                //         </h1>
                //     );
                // }}
            />
        </>
    );
};
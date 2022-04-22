import {useEffect, useMemo, useState} from "react";


const useElementOnScreen = (ref: any) => {
    const [isVisible, setIsVisible] = useState(true)
    const [width, setWidth] = useState(0)


    window.addEventListener('resize',function(e){
        // @ts-ignore
        const target = e.currentTarget.innerWidth;
        if (target) setWidth(target)

    });
    // console.log(width)
    const callBack = (entry: any) => {setIsVisible(entry[0].isIntersecting)}

    const options = useMemo(() =>
        ({
            root: null,
            rootMargin: '5px',
            threshold: 1
        }), [])

    useEffect(() => {
        const observer = new IntersectionObserver(callBack, options)
        const currentTarget = ref.current
        if (currentTarget && width > 1041) {
            observer.observe(currentTarget)
        } else {
            observer.unobserve(currentTarget)
        }

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [ref, options, width])

    return isVisible
};

export default useElementOnScreen;
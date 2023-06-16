
import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, funct) => {
    let observer = useRef();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var callback = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                funct()
                console.log(funct())
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current)
    }, [isLoading])
    // выше пример бесконечного скролинга данные подгружаются когда долистываешь до какого-то элемента, который спрятан или виден для юзера . если что используй ссылку (https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)

}
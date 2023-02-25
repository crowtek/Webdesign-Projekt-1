
import { useRef } from 'react';

function useSmoothScroll() {
    const scrollRef = useRef(null);

    function handleClick(event, target) {
        event.preventDefault();

        if (scrollRef.current && target) {
            //const scroll = scrollRef.current;
            const to = target.offsetTop;

            window.scrollTo({
                top: to,
                behavior: 'smooth'
            });
        }
    }

    return [scrollRef, handleClick];
}

export default useSmoothScroll;

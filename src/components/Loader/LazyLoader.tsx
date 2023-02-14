import { useEffect, useRef } from "react";
import { Loader } from "./Loader";

type LazyLoaderProps = {
    loadNext: () => void,
    isFinish: boolean
}

export const LazyLoader: React.FC<LazyLoaderProps> = ({ loadNext, isFinish }) => {

    const lastElem = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries[0].isIntersecting && loadNext();
        };
        observer.current = new IntersectionObserver(callback);
        lastElem.current && observer.current.observe(lastElem.current);
    }, []);

    return <>
        {isFinish ? 
            <></> :
            <div ref={lastElem} style={{ margin: '20px' }}><Loader /></div>
        }
    </>;
}
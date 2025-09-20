import {useEffect, useRef, useState} from "react";
import styles from './styles.module.css';

function fetchSomething(): Promise<{ ok: true }> {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ok: true }), 1000);
    });
}

export const Batching = () => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const renderCountRef = useRef(0);
    renderCountRef.current += 1;

    useEffect(() => {
        console.log("Committed render #", renderCountRef.current);
        console.count("Batching component commits");
    });

    function handleClick() {
        fetchSomething().then(() => {
            setCount(c => c + 1);
            setFlag(f => !f);
        });
    }

    return (
        <div>
            <button onClick={handleClick} className={styles.button}>Next</button>
            <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
        </div>
    );
};

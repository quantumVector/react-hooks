"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

export function AutomaticBatching() {
    const renderCounterRef = useRef(0);
    renderCounterRef.current += 1;

    const [clickCount, setClickCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = async () => {
        // 1) синхронные обновления
        setClickCount(previous => previous + 1);
        setIsOpen(true);

        // 2) асинхронные обновления — в React 18 тоже попадут в тот же батч
        await new Promise(resolve => setTimeout(resolve, 50));
        setClickCount(previous => previous + 1);
        setIsOpen(previous => !previous);
    };

    return (
        <div className={styles.card}>
            <h3>Automatic batching (React 18)</h3>
            <div className={styles.row}>
                <button className={styles.button} onClick={handleClick}>
                    Выполнить несколько обновлений
                </button>
                <span className={styles.counter}>renders: {renderCounterRef.current}</span>
            </div>
            <div>clickCount: {clickCount}</div>
            <div>isOpen: {String(isOpen)}</div>
            <p>Ожидаемо: при одном клике — <b>один</b> рендер.</p>
        </div>
    );
}

"use client";
import React, { useRef, useState } from "react";
import { flushSync, unstable_batchedUpdates } from "react-dom";
import styles from "./styles.module.css";

export function BatchingBefore18() {
    const renderCounterRef = useRef(0);
    renderCounterRef.current += 1;

    const [value, setValue] = useState(0);

    const causeTwoRendersWithTimer = () => {
        setTimeout(() => {
            // Имитация "как раньше": каждое обновление отдельно
            flushSync(() => setValue(previous => previous + 1));
            flushSync(() => setValue(previous => previous + 1));
        }, 0);
    };

    const batchManuallyWithTimer = () => {
        setTimeout(() => {
            // Ручной батчинг для legacy-корня
            unstable_batchedUpdates(() => {
                setValue(previous => previous + 1);
                setValue(previous => previous + 1);
            });
        }, 0);
    };

    return (
        <div className={styles.card}>
            <h3>До 18 версии (или legacy-корень)</h3>
            <div className={styles.row}>
                <button className={styles.button} onClick={causeTwoRendersWithTimer}>
                    Таймер с раздельными рендерами
                </button>
                <button className={styles.button} onClick={batchManuallyWithTimer}>
                    Таймер с ручным батчингом
                </button>
                <span className={styles.counter}>renders: {renderCounterRef.current}</span>
            </div>
            <div>value: {value}</div>
            <p>
                Первая кнопка даёт <b>два</b> рендера (мы форсим через <code>flushSync</code>). Вторая — один рендер
                благодаря <code>unstable_batchedUpdates</code>.
            </p>
        </div>
    );
}

"use client";
import React, { useRef, useState, startTransition } from "react";
import { flushSync } from "react-dom";
import styles from "./styles.module.css";

export function BatchingAfter18() {
    const renderCounterRef = useRef(0);
    renderCounterRef.current += 1;

    const [panelOpen, setPanelOpen] = useState(false);
    const [list, setList] = useState<string[]>([]);
    const [isPending, setIsPending] = useState(false); // индикатор для примера

    const breakBatchingWithFlushSync = () => {
        flushSync(() => {
            setPanelOpen(true); // немедленный рендер — DOM уже с открытой панелью
        });
        // Здесь можно что-то измерить в DOM, затем обычное обновление
        setList(previous => [...previous, "Элемент после измерения"]);
    };

    const heavyRecalculation = (size: number) => {
        const result: string[] = [];
        // синтетически тяжёлая работа
        const start = performance.now();
        while (performance.now() - start < 60) {}
        for (let index = 0; index < size; index += 1) {
            result.push(`Строка ${index + 1}`);
        }
        return result;
    };

    const lowPriorityUpdateWithTransition = () => {
        setIsPending(true);
        startTransition(() => {
            // Это обновление низкого приоритета, но оно батчится внутри транзишена
            setList(heavyRecalculation(1500));
            setIsPending(false);
        });
    };

    return (
        <div className={styles.card}>
            <h3>React 18: ручной контроль</h3>
            <div className={styles.row}>
                <button className={styles.button} onClick={breakBatchingWithFlushSync}>
                    Прервать батчинг (flushSync)
                </button>
                <button className={styles.button} onClick={lowPriorityUpdateWithTransition}>
                    Низкий приоритет (startTransition)
                </button>
                <span className={styles.counter}>renders: {renderCounterRef.current}</span>
            </div>

            <div>panelOpen: {String(panelOpen)}</div>
            <div>isPending (индикатор): {String(isPending)}</div>
            <div>list length: {list.length}</div>

            <p>
                <b>flushSync</b> — делает немедленный рендер (батчинг локально отключается).<br />
                <b>startTransition</b> — понижает приоритет тяжёлых обновлений (батчинг внутри сохраняется).
            </p>
        </div>
    );
}

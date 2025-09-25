import React, { useState } from "react";
import styles from "./styles.module.css";

const ITEMS_COUNT = 50000;

const simulateHeavyWork = (milliseconds: number) => {
    const start = performance.now();
    while (performance.now() - start < milliseconds) {
        // busy loop
    }
};

const generateItems = (value: string) => {
    simulateHeavyWork(25);

    return Array.from({ length: ITEMS_COUNT }, (_, index) => `${index + 1}. ${value}`);
};

export const WithoutTransition = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setInputValue(nextValue);

        const nextItems = generateItems(nextValue);
        setItems(nextItems);
    };

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Введите текст"
            />

            <ul className={styles.list}>
                {items.map((text, index) => (
                    <li key={index}>
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import React, { useState, useTransition } from "react";
import styles from "./styles.module.css";

const ITEMS_COUNT = 100000;

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

export const WithTransition = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.target.value;
        setInputValue(nextValue);

        // некритичное обновление: тяжёлая генерация помечена как transition
        startTransition(() => {
            const nextItems = generateItems(nextValue);
            setItems(nextItems);
        });
    };

    return (
        <div className={styles.wrapper}>
            <h2>С useTransition</h2>
            <p>Ввод остаётся отзывчивым; список обновляется в фоне.</p>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Введите текст"
                    className={styles.input}
                />
                {isPending && <span aria-live="polite">Обновляю список…</span>}
            </div>

            {!isPending && (
                <ul
                    style={{
                        marginTop: 12,
                        maxHeight: 300,
                        overflow: "auto",
                        padding: 0,
                    }}
                >
                    {items.map((text, index) => (
                        <li key={index} style={{ listStyle: "none", padding: "4px 0", borderBottom: "1px solid #eee" }}>
                            {text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

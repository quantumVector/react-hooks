"use client";

import {useMemo, useState} from "react";

type TabKey = "profile" | "analytics" | "settings";

const ITEMS_COUNT = 4000;

const simulateHeavyWork = (milliseconds: number) => {
    const start = performance.now();
    while (performance.now() - start < milliseconds) {
        // busy loop — блокирует главный поток
    }
};

function createContentForTab(tab: TabKey): string[] {
    // Имитируем тяжёлую подготовку данных (например, расчёты/парсинг)
    simulateHeavyWork(300);
    return Array.from({length: ITEMS_COUNT}, (_, index) => `${index + 1}. Текущая вкладка: ${tab}`);
}

export const WithoutTransitionTabs = () => {
    const [selectedTab, setSelectedTab] = useState<TabKey>("profile");

    // Здесь «контент вкладки» вычисляется синхронно на каждый рендер —
    // из-за этого при клике на вкладку UI замирает.
    const tabItems = useMemo(() => createContentForTab(selectedTab), [selectedTab]);

    const handleTabClick = (tab: TabKey) => {
        setSelectedTab(tab);
    };

    const TabButton = ({
                           tab,
                           title,
                       }: {
        tab: TabKey;
        title: string;
    }) => (
        <button
            onClick={() => handleTabClick(tab)}
            style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: selectedTab === tab ? "#ffe9d5" : "#fff",
                cursor: "pointer",
            }}
        >
            {title}
        </button>
    );

    return (
        <div style={{padding: 16, fontFamily: "system-ui, sans-serif"}}>
            <h2>Вкладки без useTransition</h2>
            <p>При переключении вкладок ввод и интерфейс «подлагивают», пока готовится тяжёлый контент.</p>

            <div style={{display: "flex", gap: 8, marginBottom: 12}}>
                <TabButton tab="profile" title="Профиль"/>
                <TabButton tab="analytics" title="Аналитика"/>
                <TabButton tab="settings" title="Настройки"/>
            </div>

            <div style={{marginBottom: 12}}>
                Текущая вкладка: <b>{selectedTab}</b>
            </div>

            <ul style={{marginTop: 12, maxHeight: 320, overflow: "auto", padding: 0}}>
                {tabItems.map((text, index) => (
                    <li
                        key={index}
                        style={{listStyle: "none", padding: "4px 0", borderBottom: "1px solid #eee"}}
                    >
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

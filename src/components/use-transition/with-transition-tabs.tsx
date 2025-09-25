import {useMemo, useState, useTransition} from "react";
import styles from "./styles.module.css";

type TabKey = "profile" | "analytics" | "settings";

const ITEMS_COUNT = 4000;

const simulateHeavyWork = (milliseconds: number) => {
    const start = performance.now();
    while (performance.now() - start < milliseconds) {
        // loop
    }
};

function createContentForTab(tab: TabKey): string[] {
    simulateHeavyWork(300);
    return Array.from({length: ITEMS_COUNT}, (_, index) => `${index + 1}. Текущая вкладка: ${tab}`);
}

export const WithTransitionTabs = () => {
    const [selectedTab, setSelectedTab] = useState<TabKey>("profile");
    const [deferredTab, setDeferredTab] = useState<TabKey>("profile");
    const [isPending, startTransition] = useTransition();

    const tabItems = useMemo(() => createContentForTab(deferredTab), [deferredTab]);

    const handleTabClick = (tab: TabKey) => {
        setSelectedTab(tab);

        startTransition(() => {
            setDeferredTab(tab);
        });
    };

    const TabButton = ({tab, title}: { tab: TabKey; title: string; }) => (
        <button onClick={() => handleTabClick(tab)}>
            {title}
        </button>
    );

    return (
        <div>
            <div className={styles.tabs}>
                <TabButton tab="profile" title="Профиль"/>
                <TabButton tab="analytics" title="Аналитика"/>
                <TabButton tab="settings" title="Настройки"/>
                {isPending && <span aria-live="polite">Готовлю данные…</span>}
            </div>

            <div>
                Текущая вкладка: <b>{selectedTab}</b> — отображаемый контент: <b>{deferredTab}</b>
            </div>

            <ul className={styles.list}>
                {tabItems.map((text, index) => (
                    <li key={index}>
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { useMemo, useState, useTransition } from "react";

type TabKey = "profile" | "analytics" | "settings";

const ITEMS_COUNT = 4000;

const simulateHeavyWork = (milliseconds: number) => {
    const start = performance.now();
    while (performance.now() - start < milliseconds) {
        // busy loop — блокирует главный поток
    }
};

function createContentForTab(tab: TabKey): string[] {
    simulateHeavyWork(300);
    return Array.from({ length: ITEMS_COUNT }, (_, index) => `${index + 1}. Текущая вкладка: ${tab}`);
}

export const WithTransitionTabs = () => {
    const [selectedTab, setSelectedTab] = useState<TabKey>("profile");
    const [deferredTab, setDeferredTab] = useState<TabKey>("profile");
    const [isPending, startTransition] = useTransition();

    // Контент пересчитывается по «отложенному» табу — это делает клик по вкладке отзывчивым,
    // а тяжёлая работа переносится в transition.
    const tabItems = useMemo(() => createContentForTab(deferredTab), [deferredTab]);

    const handleTabClick = (tab: TabKey) => {
        // Срочное обновление — мгновенно подсвечиваем активную вкладку
        setSelectedTab(tab);

        // Некритичное обновление — тяжёлое вычисление «в фоне»
        startTransition(() => {
            setDeferredTab(tab);
        });
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
                background: selectedTab === tab ? "#e7f7ff" : "#fff",
                cursor: "pointer",
                opacity: isPending && selectedTab === tab ? 0.8 : 1,
            }}
            aria-pressed={selectedTab === tab}
        >
            {title}
        </button>
    );

    return (
        <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
            <h2>Вкладки с useTransition</h2>
            <p>
                Подсветка активной вкладки меняется сразу. Тяжёлый контент для неё обновляется
                в transition. Пока идёт вычисление — показываем индикатор.
            </p>

            <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}>
                <TabButton tab="profile" title="Профиль" />
                <TabButton tab="analytics" title="Аналитика" />
                <TabButton tab="settings" title="Настройки" />
                {isPending && <span aria-live="polite">Готовлю данные…</span>}
            </div>

            <div style={{ marginBottom: 12 }}>
                Текущая вкладка: <b>{selectedTab}</b> — отображаемый контент: <b>{deferredTab}</b>
            </div>

            <ul
                style={{
                    marginTop: 12,
                    maxHeight: 320,
                    overflow: "auto",
                    padding: 0,
                    opacity: isPending ? 0.6 : 1,
                    transition: "opacity 120ms ease",
                }}
            >
                {tabItems.map((text, index) => (
                    <li
                        key={index}
                        style={{ listStyle: "none", padding: "4px 0", borderBottom: "1px solid #eee" }}
                    >
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

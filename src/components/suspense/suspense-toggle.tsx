import {Suspense, useState, lazy, type ComponentType} from 'react';
import styles from './styles.module.css';

const HeavyComponent = lazy(() =>
    new Promise<{ default: ComponentType }>(resolve => {
        setTimeout(async () => {
            const module = await import('./heavy-component');
            resolve(module);
        }, 2000);
    })
);

export const SuspenseToggle = () => {
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div>
            <h2>Suspense с ленивой загрузкой</h2>
            <button onClick={() => setShowHeavy(!showHeavy)} className={styles.button}>
                {showHeavy ? 'Скрыть' : 'Показать'} тяжелый компонент
            </button>

            {showHeavy && (
                <Suspense fallback={<div>Загружаю тяжелый компонент...</div>}>
                    <HeavyComponent />
                </Suspense>
            )}
        </div>
    );
};
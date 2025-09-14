import {Suspense, useState, lazy, type ComponentType} from 'react';
import {ErrorBoundary} from "./error-boundary.tsx";
import styles from './styles.module.css';

const FailingComponent = lazy(() =>
    new Promise<{ default: ComponentType<{ shouldFail: boolean }> }>((resolve) => {
        setTimeout(async () => {
            const module = await import('./failing-component.tsx');
            resolve(module);
        }, 2000);
    })
);

export const SuspenseError = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [shouldFail, setShouldFail] = useState(false);

    return (
        <div>
            <h2>Suspense с обработкой ошибок</h2>

            <div>
                <label className={styles.label}>
                    <input
                        type="checkbox"
                        checked={shouldFail}
                        onChange={(e) => setShouldFail(e.target.checked)}
                    />
                    Выбросить ошибку при загрузке
                </label>

                <button
                    onClick={() => setShowComponent(!showComponent)}
                    className={styles.button}
                >
                    {showComponent ? 'Скрыть' : 'Показать'} компонент
                </button>
            </div>

            {showComponent && (
                <ErrorBoundary>
                    <Suspense fallback={<div>Загружаю компонент...</div>}>
                        <FailingComponent shouldFail={shouldFail} />
                    </Suspense>
                </ErrorBoundary>
            )}
        </div>
    );
};
import styles from './styles.module.css';

export const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <h1>React Hooks Examples</h1>
                <p className={styles.subtitle}>
                    Изучайте React hooks через практические примеры
                </p>
            </header>

            <div className={styles.description}>
                <p>
                    Этот проект содержит практические примеры использования различных React hooks
                    и новых возможностей React 19. Выберите интересующую вас тему в навигации слева.
                </p>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <h3>🔄 useTransition</h3>
                        <p>Научитесь делать UI отзывчивым при выполнении тяжелых операций</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>⏳ Suspense</h3>
                        <p>Элегантная обработка асинхронных операций и ленивой загрузки</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>📦 Батчинг</h3>
                        <p>Понимание автоматического батчинга обновлений в React 18+</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>🔄 useDeferredValue</h3>
                        <p>Отложенное обновление значений для улучшения производительности</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>🔗 useSyncExternalStore</h3>
                        <p>Синхронизация с внешними источниками данных</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>🎯 useImperativeHandle</h3>
                        <p>Кастомизация ref объектов для компонентов</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>⚡ useOptimistic</h3>
                        <p>Оптимистичные обновления UI для лучшего UX</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>🔄 useReducer</h3>
                        <p>Управление сложным состоянием через редьюсеры</p>
                    </div>

                    <div className={styles.feature}>
                        <h3>🚀 React 19</h3>
                        <p>Новые возможности и улучшения в React 19</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
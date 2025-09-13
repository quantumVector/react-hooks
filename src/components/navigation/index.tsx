import {NavLink} from 'react-router-dom';
import styles from './styles.module.css';

const navigationItems = [
    {
        label: 'useTransition',
        path: '/use-transition',
        submenu: [
            {label: 'Пример 1 без useTransition', path: '/use-transition/without-example-1'},
            {label: 'Пример 1 с useTransition', path: '/use-transition/with-example-1'},
            {label: 'Пример 2 без useTransition', path: '/use-transition/without-example-2'},
            {label: 'Пример 2 с useTransition', path: '/use-transition/with-example-2'},
        ]
    },
    {
        label: 'Suspense',
        path: '/suspense',
        submenu: [
            {label: 'Базовый пример', path: '/suspense/basic'},
            {label: 'С ленивой загрузкой', path: '/suspense/lazy-loading'},
            {label: 'С ошибками', path: '/suspense/error-boundary'},
        ]
    },
    {
        label: 'Батчинг',
        path: '/batching',
        submenu: [
            {label: 'Автоматический батчинг', path: '/batching/automatic'},
            {label: 'До React 18', path: '/batching/before-18'},
            {label: 'После React 18', path: '/batching/after-18'},
        ]
    },
    {
        label: 'useDeferredValue',
        path: '/use-deferred-value',
        submenu: [
            {label: 'Базовый пример', path: '/use-deferred-value/basic'},
            {label: 'С поиском', path: '/use-deferred-value/search'},
            {label: 'Сравнение с useTransition', path: '/use-deferred-value/comparison'},
        ]
    },
    {
        label: 'useSyncExternalStore',
        path: '/use-sync-external-store',
        submenu: [
            {label: 'Базовый пример', path: '/use-sync-external-store/basic'},
            {label: 'С localStorage', path: '/use-sync-external-store/local-storage'},
            {label: 'С window размером', path: '/use-sync-external-store/window-size'},
        ]
    },
    {
        label: 'useImperativeHandle',
        path: '/use-imperative-handle',
        submenu: [
            {label: 'Базовый пример', path: '/use-imperative-handle/basic'},
            {label: 'С forwardRef', path: '/use-imperative-handle/forward-ref'},
            {label: 'Кастомные методы', path: '/use-imperative-handle/custom-methods'},
        ]
    },
    {
        label: 'useOptimistic',
        path: '/use-optimistic',
        submenu: [
            {label: 'Базовый пример', path: '/use-optimistic/basic'},
            {label: 'С формой', path: '/use-optimistic/form'},
            {label: 'С API запросами', path: '/use-optimistic/api'},
        ]
    },
    {
        label: 'useReducer',
        path: '/use-reducer',
        submenu: [
            {label: 'Базовый счетчик', path: '/use-reducer/basic-counter'},
            {label: 'Сложное состояние', path: '/use-reducer/complex-state'},
            {label: 'С useContext', path: '/use-reducer/with-context'},
        ]
    },
    {
        label: 'Улучшения в React 19',
        path: '/react-19-improvements',
        submenu: [
            {label: 'React Compiler', path: '/react-19-improvements/compiler'},
            {label: 'Actions', path: '/react-19-improvements/actions'},
            {label: 'use() hook', path: '/react-19-improvements/use-hook'},
            {label: 'Новые возможности', path: '/react-19-improvements/new-features'},
        ]
    }
];

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.brand}>
                <h1>React Hooks Examples</h1>
            </div>

            <div className={styles.menu}>
                {navigationItems.map((item) => (
                    <div key={item.path} className={styles.menuItem}>
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
                                `${styles.menuLink} ${isActive ? styles.active : ''}`
                            }
                        >
                            {item.label}
                        </NavLink>

                        {item.submenu && (
                            <div className={styles.submenu}>
                                {item.submenu.map((subItem) => (
                                    <NavLink
                                        key={subItem.path}
                                        to={subItem.path}
                                        className={({isActive}) =>
                                            `${styles.submenuLink} ${isActive ? styles.active : ''}`
                                        }
                                    >
                                        {subItem.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};
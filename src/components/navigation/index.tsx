import {NavLink} from 'react-router-dom';
import styles from './styles.module.css';

const navigationItems = [
    {
        label: 'useTransition',
        path: '/use-transition',
        submenu: [
            {label: 'Поиск без useTransition', path: '/use-transition/search-without'},
            {label: 'Поиск с useTransition', path: '/use-transition/search-with'},
            {label: 'Вкладки без useTransition', path: '/use-transition/tabs-without'},
            {label: 'Вкладки с useTransition', path: '/use-transition/tabs-with'},
        ]
    },
    {
        label: 'Suspense',
        path: '/suspense',
        submenu: [
            {label: 'Базовый пример', path: '/suspense/toggle'},
            {label: 'С ленивой загрузкой', path: '/suspense/lazy-loading'},
            {label: 'С ошибками', path: '/suspense/error-boundary'},
        ]
    },
    {
        label: 'Батчинг',
        path: '/batching',
        submenu: [
            {label: 'Батчинг', path: '/batching/batching'},
        ]
    },
    {
        label: 'useDeferredValue',
        path: '/use-deferred-value',
        submenu: [
            {label: 'С поиском', path: '/use-deferred-value/search'},
        ]
    },
    {
        label: 'useSyncExternalStore',
        path: '/use-sync-external-store',
        submenu: [
            {label: 'С localStorage', path: '/use-sync-external-store/local-storage'},
        ]
    },
    {
        label: 'useImperativeHandle',
        path: '/use-imperative-handle',
        submenu: [
            {label: 'Модалка', path: '/use-imperative-handle/modal'},
        ]
    },
    {
        label: 'useOptimistic',
        path: '/use-optimistic',
        submenu: [
            {label: 'Базовый пример', path: '/use-optimistic/basic'},
        ]
    },
    {
        label: 'useReducer',
        path: '/use-reducer',
        submenu: [
            {label: 'Карусель', path: '/use-reducer/basic'},
        ]
    },
    // {
    //     label: 'Улучшения в React 19',
    //     path: '/react-19-improvements',
    //     submenu: [
    //         {label: 'React Compiler', path: '/react-19-improvements/compiler'},
    //         {label: 'Actions', path: '/react-19-improvements/actions'},
    //         {label: 'use() hook', path: '/react-19-improvements/use-hook'},
    //         {label: 'Новые возможности', path: '/react-19-improvements/new-features'},
    //     ]
    // }
];

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.menu}>
                {navigationItems.map((item, index) => (
                    <div key={index} className={styles.menuItem}>
                        <div className={styles.menuHeader}>
                            {item.label}
                        </div>

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

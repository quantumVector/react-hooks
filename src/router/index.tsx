import { createBrowserRouter } from 'react-router-dom';
import {Layout} from "../components/layout";

import {
    WithoutTransition,
    WithoutTransitionTabs,
    WithTransition,
    WithTransitionTabs
} from "../components/use-transition";
import {lazy, type ReactNode, Suspense} from "react";

const LazyPage = lazy(() => import('../pages/lazy-page'));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={<div style={{ padding: 20 }}>Загружаю страницу...</div>}>
        {children}
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "use-transition",
                children: [
                    {
                        path: "search-without",
                        element: <WithoutTransition />
                    },
                    {
                        path: "search-with",
                        element: <WithTransition />
                    },
                    {
                        path: "tabs-without",
                        element: <WithoutTransitionTabs />
                    },
                    {
                        path: "tabs-with",
                        element: <WithTransitionTabs />
                    }
                ]
            },
            {
                path: "suspense",
                children: [
                    {
                        path: "basic",
                        element: <SuspenseBasic />
                    },
                    {
                        path: "lazy-loading",
                        element: (
                            <SuspenseWrapper>
                                <LazyPage />
                            </SuspenseWrapper>
                        )
                    }
                    // {
                    //     path: "lazy-page",
                    //     element: <PlaceholderPage title="Suspense - Базовый пример" />
                    // },
                    // {
                    //     path: "lazy-loading",
                    //     element: <PlaceholderPage title="Suspense - Ленивая загрузка" />
                    // },
                    // {
                    //     path: "error-boundary",
                    //     element: <PlaceholderPage title="Suspense - Обработка ошибок" />
                    // }
                ]
            },
            // {
            //     path: "batching",
            //     children: [
            //         {
            //             path: "automatic",
            //             element: <PlaceholderPage title="Автоматический батчинг" />
            //         },
            //         {
            //             path: "before-18",
            //             element: <PlaceholderPage title="Батчинг до React 18" />
            //         },
            //         {
            //             path: "after-18",
            //             element: <PlaceholderPage title="Батчинг после React 18" />
            //         }
            //     ]
            // },
            // {
            //     path: "use-deferred-value",
            //     children: [
            //         {
            //             path: "basic",
            //             element: <PlaceholderPage title="useDeferredValue - Базовый пример" />
            //         },
            //         {
            //             path: "search",
            //             element: <PlaceholderPage title="useDeferredValue - С поиском" />
            //         },
            //         {
            //             path: "comparison",
            //             element: <PlaceholderPage title="useDeferredValue - Сравнение с useTransition" />
            //         }
            //     ]
            // },
            // {
            //     path: "use-sync-external-store",
            //     children: [
            //         {
            //             path: "basic",
            //             element: <PlaceholderPage title="useSyncExternalStore - Базовый пример" />
            //         },
            //         {
            //             path: "local-storage",
            //             element: <PlaceholderPage title="useSyncExternalStore - С localStorage" />
            //         },
            //         {
            //             path: "window-size",
            //             element: <PlaceholderPage title="useSyncExternalStore - Размер окна" />
            //         }
            //     ]
            // },
            // {
            //     path: "use-imperative-handle",
            //     children: [
            //         {
            //             path: "basic",
            //             element: <PlaceholderPage title="useImperativeHandle - Базовый пример" />
            //         },
            //         {
            //             path: "forward-ref",
            //             element: <PlaceholderPage title="useImperativeHandle - С forwardRef" />
            //         },
            //         {
            //             path: "custom-methods",
            //             element: <PlaceholderPage title="useImperativeHandle - Кастомные методы" />
            //         }
            //     ]
            // },
            // {
            //     path: "use-optimistic",
            //     children: [
            //         {
            //             path: "basic",
            //             element: <PlaceholderPage title="useOptimistic - Базовый пример" />
            //         },
            //         {
            //             path: "form",
            //             element: <PlaceholderPage title="useOptimistic - С формой" />
            //         },
            //         {
            //             path: "api",
            //             element: <PlaceholderPage title="useOptimistic - С API запросами" />
            //         }
            //     ]
            // },
            // {
            //     path: "use-reducer",
            //     children: [
            //         {
            //             path: "basic-counter",
            //             element: <PlaceholderPage title="useReducer - Базовый счетчик" />
            //         },
            //         {
            //             path: "complex-state",
            //             element: <PlaceholderPage title="useReducer - Сложное состояние" />
            //         },
            //         {
            //             path: "with-context",
            //             element: <PlaceholderPage title="useReducer - С useContext" />
            //         }
            //     ]
            // },
            // {
            //     path: "react-19-improvements",
            //     children: [
            //         {
            //             path: "compiler",
            //             element: <PlaceholderPage title="React Compiler" />
            //         },
            //         {
            //             path: "actions",
            //             element: <PlaceholderPage title="Actions" />
            //         },
            //         {
            //             path: "use-hook",
            //             element: <PlaceholderPage title="use() hook" />
            //         },
            //         {
            //             path: "new-features",
            //             element: <PlaceholderPage title="Новые возможности" />
            //         }
            //     ]
            // }
        ]
    }
]);
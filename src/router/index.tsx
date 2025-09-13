import { createBrowserRouter } from 'react-router-dom';
import {PlaceholderPage} from "../components/placeholder";
import {Layout} from "../components/layout";
import {Home} from "../pages/home";
import {
    WithoutTransition,
    WithoutTransitionTabs,
    WithTransition,
    WithTransitionTabs
} from "../components/use-transition";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            // useTransition routes
            {
                path: "use-transition",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="useTransition" />
                    },
                    {
                        path: "without-example-1",
                        element: <WithoutTransition />
                    },
                    {
                        path: "with-example-1",
                        element: <WithTransition />
                    },
                    {
                        path: "without-example-2",
                        element: <WithoutTransitionTabs />
                    },
                    {
                        path: "with-example-2",
                        element: <WithTransitionTabs />
                    }
                ]
            },
            // Suspense routes
            {
                path: "suspense",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="Suspense" />
                    },
                    {
                        path: "basic",
                        element: <PlaceholderPage title="Suspense - Базовый пример" />
                    },
                    {
                        path: "lazy-loading",
                        element: <PlaceholderPage title="Suspense - Ленивая загрузка" />
                    },
                    {
                        path: "error-boundary",
                        element: <PlaceholderPage title="Suspense - Обработка ошибок" />
                    }
                ]
            },
            // Batching routes
            {
                path: "batching",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="Батчинг" />
                    },
                    {
                        path: "automatic",
                        element: <PlaceholderPage title="Автоматический батчинг" />
                    },
                    {
                        path: "before-18",
                        element: <PlaceholderPage title="Батчинг до React 18" />
                    },
                    {
                        path: "after-18",
                        element: <PlaceholderPage title="Батчинг после React 18" />
                    }
                ]
            },
            // useDeferredValue routes
            {
                path: "use-deferred-value",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="useDeferredValue" />
                    },
                    {
                        path: "basic",
                        element: <PlaceholderPage title="useDeferredValue - Базовый пример" />
                    },
                    {
                        path: "search",
                        element: <PlaceholderPage title="useDeferredValue - С поиском" />
                    },
                    {
                        path: "comparison",
                        element: <PlaceholderPage title="useDeferredValue - Сравнение с useTransition" />
                    }
                ]
            },
            // useSyncExternalStore routes
            {
                path: "use-sync-external-store",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="useSyncExternalStore" />
                    },
                    {
                        path: "basic",
                        element: <PlaceholderPage title="useSyncExternalStore - Базовый пример" />
                    },
                    {
                        path: "local-storage",
                        element: <PlaceholderPage title="useSyncExternalStore - С localStorage" />
                    },
                    {
                        path: "window-size",
                        element: <PlaceholderPage title="useSyncExternalStore - Размер окна" />
                    }
                ]
            },
            // useImperativeHandle routes
            {
                path: "use-imperative-handle",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="useImperativeHandle" />
                    },
                    {
                        path: "basic",
                        element: <PlaceholderPage title="useImperativeHandle - Базовый пример" />
                    },
                    {
                        path: "forward-ref",
                        element: <PlaceholderPage title="useImperativeHandle - С forwardRef" />
                    },
                    {
                        path: "custom-methods",
                        element: <PlaceholderPage title="useImperativeHandle - Кастомные методы" />
                    }
                ]
            },
            // useOptimistic routes
            {
                path: "use-optimistic",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="useOptimistic" />
                    },
                    {
                        path: "basic",
                        element: <PlaceholderPage title="useOptimistic - Базовый пример" />
                    },
                    {
                        path: "form",
                        element: <PlaceholderPage title="useOptimistic - С формой" />
                    },
                    {
                        path: "api",
                        element: <PlaceholderPage title="useOptimistic - С API запросами" />
                    }
                ]
            },
            // useReducer routes
            {
                path: "use-reducer",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="useReducer" />
                    },
                    {
                        path: "basic-counter",
                        element: <PlaceholderPage title="useReducer - Базовый счетчик" />
                    },
                    {
                        path: "complex-state",
                        element: <PlaceholderPage title="useReducer - Сложное состояние" />
                    },
                    {
                        path: "with-context",
                        element: <PlaceholderPage title="useReducer - С useContext" />
                    }
                ]
            },
            // React 19 improvements routes
            {
                path: "react-19-improvements",
                children: [
                    {
                        index: true,
                        element: <PlaceholderPage title="Улучшения в React 19" />
                    },
                    {
                        path: "compiler",
                        element: <PlaceholderPage title="React Compiler" />
                    },
                    {
                        path: "actions",
                        element: <PlaceholderPage title="Actions" />
                    },
                    {
                        path: "use-hook",
                        element: <PlaceholderPage title="use() hook" />
                    },
                    {
                        path: "new-features",
                        element: <PlaceholderPage title="Новые возможности" />
                    }
                ]
            }
        ]
    }
]);
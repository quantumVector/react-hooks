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
            // Suspense routes
            {
                path: "suspense",
                children: [
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
import { createBrowserRouter } from 'react-router-dom';
import {Layout} from "../components/layout";

import {
    WithoutTransition,
    WithoutTransitionTabs,
    WithTransition,
    WithTransitionTabs
} from "../components/use-transition";
import {lazy} from "react";
import {SuspenseToggle, SuspenseWrapper} from "../components/suspense";
import {SuspenseError} from "../components/suspense/suspense-with-error.tsx";
import {Batching} from "../components/batching";
import {WithDeferredValue} from "../components/use-deferred-value";
import {WithOptimistic} from "../components/use-optimistic";

const LazyPage = lazy(() => import('../pages/lazy-page'));

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
                        path: "toggle",
                        element: <SuspenseToggle />
                    },
                    {
                        path: "lazy-loading",
                        element: (
                            <SuspenseWrapper>
                                <LazyPage />
                            </SuspenseWrapper>
                        )
                    },
                    {
                        path: "error-boundary",
                        element: <SuspenseError />
                    }
                ]
            },
            {
                path: "batching",
                children: [
                    {
                        path: "batching",
                        element: <Batching />
                    },
                ]
            },
            {
                path: "use-deferred-value",
                children: [
                    {
                        path: "search",
                        element: <WithDeferredValue />
                    },
                ]
            },
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
            {
                path: "use-optimistic",
                children: [
                    {
                        path: "basic",
                        element: <WithOptimistic />
                    },
                ]
            },
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
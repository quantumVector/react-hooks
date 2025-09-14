import {type ReactNode, Suspense} from "react";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={<div style={{ padding: 20 }}>Загружаю страницу...</div>}>
        {children}
    </Suspense>
);
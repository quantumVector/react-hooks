import {type ChangeEvent, useSyncExternalStore} from "react";
import styles from './styles.module.css';

function createLocalStorageStore(key: string, initialValue: string) {
    const isBrowser = typeof window !== "undefined";

    const read = () => {
        if (!isBrowser) {
            return initialValue;
        }

        const raw = window.localStorage.getItem(key);

        return raw ?? initialValue;
    };

    const subscribe = (onStoreChange: () => void) => {
        if (!isBrowser) {
            return () => {
            };
        }

        const onStorage = (e: StorageEvent) => {
            if (e.key === key) onStoreChange();
        };

        const onLocal = () => {
            onStoreChange();
        };

        window.addEventListener("storage", onStorage);
        window.addEventListener("local-storage", onLocal as EventListener);

        return () => {
            window.removeEventListener("storage", onStorage);
            window.removeEventListener("local-storage", onLocal as EventListener);
        };
    };

    const write = (next: string) => {
        if (!isBrowser) {
            return;
        }

        window.localStorage.setItem(key, next);
        window.dispatchEvent(new Event("local-storage"));
    };

    const clear = () => {
        if (!isBrowser) {
            return;
        }

        window.localStorage.removeItem(key);
        window.dispatchEvent(new Event("local-storage"));
    };

    return {read, subscribe, write, clear};
}


const store = createLocalStorageStore("sync-input", "");

export const WithUseSynExternalStore = () => {
    const value = useSyncExternalStore(store.subscribe, store.read, store.read);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        store.write(e.currentTarget.value);
    }

    const onClear = () => {
        store.clear();
    }

    return (
        <div className={styles.container}>
            <input type="text" value={value} onChange={onChange}/>
            <button onClick={onClear}>Очистить</button>
        </div>
    );
};

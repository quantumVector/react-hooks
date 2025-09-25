import {useEffect, useReducer} from 'react';
import styles from './styles.module.css';

type State = {
    items: string[];
    currentIndex: number;
    length: number;
};

type Action =
    | { type: 'init'; payload: { items: string[]; startIndex?: number } }
    | { type: 'next' }
    | { type: 'previous' }
    | { type: 'goTo'; payload: { index: number } };

const initialState = {items: [], currentIndex: 0, length: 0};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'init': {
            const items = action.payload.items;
            const length = items.length;
            const startIndex = clamp(action.payload.startIndex ?? 0, 0, Math.max(0, length - 1));
            return {items, length, currentIndex: startIndex};
        }
        case 'next': {
            if (state.length === 0) return state;
            return {...state, currentIndex: (state.currentIndex + 1) % state.length};
        }
        case 'previous': {
            if (state.length === 0) return state;
            return {...state, currentIndex: (state.currentIndex - 1 + state.length) % state.length};
        }
        case 'goTo': {
            if (state.length === 0) return state;
            const next = clamp(action.payload.index, 0, state.length - 1);
            return {...state, currentIndex: next};
        }
    }
}

function clamp(value: number, minimum: number, maximum: number) {
    return Math.max(minimum, Math.min(maximum, value));
}

export const WithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const items = ['Первый', 'Второй', 'Третий'];

    useEffect(() => {
        dispatch({ type: 'init', payload: { items, startIndex: 0 } });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.slideCard}>
                {state.length > 0 ? items[state.currentIndex] : 'Нет элементов'}
            </div>

            <div className={styles.controlsRow}>
                <button onClick={() => dispatch({ type: 'previous' })}>← Назад</button>
                <button onClick={() => dispatch({ type: 'next' })}>Вперёд →</button>
                <button onClick={() => dispatch({ type: 'goTo', payload: { index: 0 } })}>
                    К первому
                </button>
                <button onClick={() => dispatch({ type: 'goTo', payload: { index: 2 } })}>
                    К третьему
                </button>
            </div>

            <div className={styles.stateRow}>Текущий индекс: {state.currentIndex}</div>
        </div>
    );
}
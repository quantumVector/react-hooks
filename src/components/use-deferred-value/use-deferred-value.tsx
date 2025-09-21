import {type ChangeEvent, memo, useDeferredValue, useState} from "react";
import styles from './styles.module.css';

const SearchResults = memo(function SearchResults({ searchTerm }: { searchTerm: string }) {
    // Допустим, searchTerm - это уже отложенное значение
    const allItems = Array.from({ length: 5000 }, (_, i) => `Item ${i}`);

    // Моделируем какую-то тяжёлую фильтрацию
    const filteredItems = allItems.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul>
            {filteredItems.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    );
});

export const WithDeferredValue = () => {
    const [inputValue, setInputValue] = useState('');
    // "Отложенное" значение на основе текущего inputValue
    const deferredValue = useDeferredValue(inputValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input value={inputValue} onChange={handleChange} className={styles.input} placeholder="Поиск..." />
            {/*
        В компонент SearchResults передаем НЕ inputValue напрямую,
        а именно deferredValue, чтобы он мог обновиться с меньшим приоритетом
      */}
            <SearchResults searchTerm={deferredValue} />
        </div>
    );
};

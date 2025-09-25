import {type ChangeEvent, memo, useDeferredValue, useState} from "react";
import styles from './styles.module.css';

const SearchResults = memo(function SearchResults({ searchTerm }: { searchTerm: string }) {
    const allItems = Array.from({ length: 5000 }, (_, i) => `Item ${i}`);

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

    const deferredValue = useDeferredValue(inputValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input value={inputValue} onChange={handleChange} className={styles.input} placeholder="Поиск..." />
            <SearchResults searchTerm={deferredValue} />
        </div>
    );
};

import styles from './styles.module.css';

const HeavyComponent = () => {
    return (
        <div className={styles.heavy}>
            <h3>Тяжелый компонент загружен!</h3>
            <p>Этот компонент был загружен лениво через React.lazy()</p>
            <ul>
                <li>Загрузка была отложена до первого использования</li>
                <li>Пока компонент загружался, показывался fallback</li>
                <li>После загрузки компонент кешируется</li>
            </ul>
        </div>
    );
};

export default HeavyComponent;
import styles from './styles.module.css';

const HeavyComponent = () => {
    return (
        <div className={styles.heavy}>
            <h3>Тяжелый компонент загружен!</h3>
        </div>
    );
};

export default HeavyComponent;
import styles from './styles.module.css';

interface FailingComponentProps {
    shouldFail: boolean;
}

const FailingComponent = ({ shouldFail }: FailingComponentProps) => {
    if (shouldFail) {
        throw new Error('Компонент намеренно выбросил ошибку!');
    }

    return (
        <div className={styles.success}>
            <h3>Компонент загружен успешно!</h3>
            <p>Все работает отлично</p>
        </div>
    );
};

export default FailingComponent;
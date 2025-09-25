import {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
    type ReactNode,
} from "react";
import styles from './styles.module.css';

export type ModalHandle = {
    open: () => void;
    close: () => void;
    toggle: () => void;
};

type ModalProps = {
    children: ReactNode;
};

export const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
    { children },
    ref
) {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            open: () => setIsVisible(true),
            close: () => setIsVisible(false),
            toggle: () => setIsVisible((v) => !v),
        }),
        []
    );

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={() => setIsVisible(false)}>Закрыть</button>
            </div>
        </div>
    );
});

export const WithUseImperativeHandle = () => {
    const modalRef = useRef<ModalHandle>(null);

    return (
        <div>
            <button onClick={() => modalRef.current?.open()}>
                Открыть модалку
            </button>
            <button onClick={() => modalRef.current?.toggle()}>
                Переключить
            </button>
            <button onClick={() => modalRef.current?.close()}>
                Закрыть
            </button>

            <Modal ref={modalRef}>
                <h2>Привет!</h2>
            </Modal>
        </div>
    );
}

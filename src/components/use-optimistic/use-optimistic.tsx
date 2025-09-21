import { useOptimistic, useRef, useState } from 'react';
import styles from './styles.module.css';

type Message = {
    message: string;
    preparing?: boolean;
};

async function makeMessage(message: string): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return message;
}

type ChatProps = {
    messages: Message[];
    onMakeMessage: (message: string) => Promise<void>;
};

function Chat({ messages, onMakeMessage }: ChatProps) {
    const formRef = useRef<HTMLFormElement | null>(null);

    async function formAction(formData: FormData): Promise<void> {
        const value = formData.get('message');
        if (typeof value !== 'string') return;
        const message = value.trim();
        if (!message) return;

        addOptimisticMessage(message);
        formRef.current?.reset();
        await onMakeMessage(message);
    }

    const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(
        messages,
        (state, newMessage) => [
            ...state,
            { message: newMessage, preparing: true },
        ]
    );

    return (
        <div>
            <form action={formAction} ref={formRef}>
                <input type="text" name="message" placeholder="Введите сообщение" className={styles.input} />
                <button type="submit" className={styles.button}>Отправить</button>
            </form>

            {optimisticMessages.map(item => (
                <div key={item.message}>
                    {item.message}
                    {item.preparing ? <span> (Отправляется…)</span> : <span> ✅</span>}
                </div>
            ))}
        </div>
    );
}

export const WithOptimistic = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    async function onMakeMessage(message: string): Promise<void> {
        const sentMessage = await makeMessage(message);
        setMessages((current) => [...current, { message: sentMessage }]);
    }

    return <Chat messages={messages} onMakeMessage={onMakeMessage} />;
};

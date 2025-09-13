export const PlaceholderPage = ({ title }: { title: string }) => (
    <div style={{
        padding: '40px',
        textAlign: 'center',
        background: '#f8fafc',
        borderRadius: '12px',
        margin: '20px 0'
    }}>
        <h1 style={{ color: '#1f2937', marginBottom: '16px' }}>{title}</h1>
        <p style={{ color: '#6b7280', fontSize: '18px' }}>
            Этот раздел находится в разработке
        </p>
        <div style={{
            marginTop: '20px',
            padding: '12px 20px',
            background: '#dbeafe',
            color: '#1e40af',
            borderRadius: '8px',
            display: 'inline-block',
            fontSize: '14px'
        }}>
            💡 Скоро здесь появятся интерактивные примеры!
        </div>
    </div>
);
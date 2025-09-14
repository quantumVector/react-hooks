const heavyInit = () => {
    const start = Date.now();
    while (Date.now() - start < 2000) { /* empty */ }
};

const LazyPage = () => {
    heavyInit();

    return (
        <div style={{ padding: 20 }}>
            <h2>Ленивая страница</h2>
            <p>Эта страница была загружена лениво с помощью React.lazy() и Suspense</p>
        </div>
    );
};

export default LazyPage;
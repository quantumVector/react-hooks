import {WithoutTransition, WithoutTransitionTabs, WithTransition} from "./components/use-transition";

function App() {
    return (
        <>
            {/*<WithoutTransition/>*/}
            {/*<WithTransition/>*/}
            {/*<WithoutTransitionTabs />*/}
            <WithTransitionTabs />
        </>
    )
}

export default App

import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';
import {Navigation} from "../navigation";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Navigation />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};
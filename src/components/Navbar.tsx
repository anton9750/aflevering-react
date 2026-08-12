import styles from "./navbar/navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <a href="#" className={styles.link}>Forside</a>
                </li>

                <li>
                    <a href="#" className={styles.link}>Verdensmål</a>
                </li>

                <li>
                    <a href="#" className={styles.link}>Om os</a>
                </li>
            </ul>
        </nav>
    );
};
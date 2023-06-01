import React from 'react';
import styles from './header.module.css'
import {Link} from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Link to="/" className={styles.header_store}>
                    Game Store
                </Link>
            </div>
            <div className={styles.cart}>
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;
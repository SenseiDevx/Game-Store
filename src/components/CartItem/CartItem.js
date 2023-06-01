import React from 'react';
import styles from './cartItem.module.css'

const CartItem = ({title, price, id}) => {
    return (
        <div className={styles.cartItem}>
            <span className={styles.span}>{title}</span>
            <div className={styles.price}>
                <span className={styles.prices}>{price} rub</span>
            </div>
        </div>
    );
};

export default CartItem;
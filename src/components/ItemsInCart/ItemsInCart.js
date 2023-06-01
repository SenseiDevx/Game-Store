import React from 'react';
import styles from './itemsincart.module.css'

const ItemsInCart = ({quantity = 0}) => {
    return quantity > 0 ? (
        <div className={styles.itemsInCart}>
            {quantity}
        </div>
    ) : null
};

export default ItemsInCart;
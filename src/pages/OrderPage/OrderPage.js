import React from 'react';
import styles from './orderpage.module.css'
import itemsInCart from "../../components/ItemsInCart/ItemsInCart";
import OrderItem from "../../components/OrderItem/OrderItem";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../components/Uttils/Uttils";

const OrderPage = () => {

    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length < 1) {
        return <h1>Ваша корзина пуста!!!</h1>
    }

    return (
        <div className={styles.orderPage}>
            <div className={styles.left}>
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className={styles.right}>
                <div className={styles.price}>
                    <span>{items.length} товар на сумму  {calcTotalPrice(items)} rub</span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
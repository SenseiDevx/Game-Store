import React from 'react';
import styles from './cartmenu.module.css'
import {calcTotalPrice} from "../Uttils/Uttils";
import {Button} from "@mui/material";
import CartItem from "../CartItem/CartItem";
import {useSelector} from "react-redux";

const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className={styles.cartMenu}>
            <div className={styles.gameList}>
                {items.length > 0
                    ? items.map((game) => (
                        <CartItem
                            key={game.image}
                            image={game.image}
                            price={game.price}
                            title={game.title}
                            id={game.id}
                        />
                    ))
                    : "Корзина пуста"}
            </div>
            {items.length > 0 ? (
                <div className={styles.arrange}>
                    <div className={styles.totalPrice}>
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

export default CartMenu
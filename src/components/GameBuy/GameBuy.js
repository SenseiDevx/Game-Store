import React  from 'react';
import styles from './gamebuy.module.css'
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {deleteItem, setItemCart} from "../../redux/slices/cartSlice/cartSlice";

const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItem(game.id));
        } else {
            dispatch(setItemCart(game));
        }
    };

    return (
        <div className={styles.gameBuy}>
            <span className={styles.price}>{game.price} rub</span>
            <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: 100 }}
                onClick={handleClick}
            >
                {isItemInCart ? 'Удалить' : 'Корзина'}
            </Button>
        </div>
    );
};

export default GameBuy;

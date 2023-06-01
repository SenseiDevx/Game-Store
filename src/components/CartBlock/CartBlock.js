import React, {useState} from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import styles from './cartblock.module.css'
import {useSelector} from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import {calcTotalPrice} from "../Uttils/Uttils";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import {useNavigate} from "react-router-dom";

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    const navigate = useNavigate()

    const handleClick = () => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }

    return (
        <div className={styles.cartBlock}>
            <ItemsInCart quantity={items.length}/>
            <LocalGroceryStoreIcon style={{fontSize: 25, position: 'relative', cursor: 'pointer'}}
                                   onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className={styles.cartBlock__totalPrice}>{totalPrice} rub</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    );
};

export default CartBlock;
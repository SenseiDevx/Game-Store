import React from 'react';
import styles from './orderitem.module.css'
import {useDispatch} from "react-redux";
import GameCover from "../GameCover/GameCover";
import {deleteItem} from "../../redux/slices/cartSlice/cartSlice";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const OrderItem = ({game}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteItem(game.id))
    }

    return (
        <div className={styles.orderItem}>
             <div className={styles.cover}>
                 <GameCover image={game.image}/>
             </div>
            <div className={styles.title}>
                <span>{game.title}</span>
            </div>
            <div className={styles.price} >
                <span>{game.price} rub</span>
                <HighlightOffIcon style={{fontSize: 25, cursor: 'pointer', marginLeft: '10px'}} onClick={handleClick}/>
            </div>
        </div>
    );
};

export default OrderItem;
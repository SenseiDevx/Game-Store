import React from 'react';
import styles from './gameItem.module.css'
import GameCover from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/slices/gameSlice/gameSlice";

const GameItem = ({game}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/about/${game.title}`)
    }

    return (
        <div className={styles.gameItem} onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className={styles.details}>
                <span className={styles.title}>{game.title}</span>
                <div className={styles.genre}>
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre}/>
                    ))}
                </div>
                <div className={styles.buy}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};

export default GameItem;
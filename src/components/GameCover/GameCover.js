import React from 'react';
import styles from './gameCover.module.css'

const GameCover = ({image}) => {
    return (
        <div className={styles.gameCover} style={{ backgroundImage: `url(${image})`}}>
            
        </div>
    );
};

export default GameCover;
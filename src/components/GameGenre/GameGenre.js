import React from 'react';
import styles from './gamegenre.module.css';

const GameGenre = ({ genre }) => {
    return (
        <div className={styles.gameGenre}>
            {genre}
        </div>
    );
};

export default GameGenre;

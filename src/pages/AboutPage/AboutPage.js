import React from 'react';
import styles from './AboutPage.module.css'
import {useSelector} from "react-redux";
import GameCover from "../../components/GameCover/GameCover";
import GameGenre from "../../components/GameGenre/GameGenre";
import GameBuy from "../../components/GameBuy/GameBuy";

const AboutPage = () => {
    const game = useSelector((state) => state.game.currentGame)


    if (!game) return null

    return (
        <div className={styles.gamePage}>
            <h1>{game.title}</h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <iframe
                        width='90%'
                        height="400px"
                        src={game.video}
                        title="YouTube Video Player"
                        frameBorder='0'
                    ></iframe>
                </div>
                <div className={styles.right}>
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondaryText">Популярные метки этого продукта: </p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                    <div className={styles.buyGame}>
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
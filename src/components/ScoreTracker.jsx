import styles from "../styles/ScoreTracker.module.css";

export default function ScoreTracker({ currentScore, bestScore }) {
  return (
    <div className={styles.scoreTracker}>
      <div className={styles.currentScore}>CURRENT SCORE : {currentScore}</div>
      <div className={styles.bestScore}>BEST SCORE : {bestScore}</div>
    </div>
  );
}

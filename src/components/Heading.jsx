import styles from "../styles/Heading.module.css";

export default function Heading() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>VALORANT Memory Game</h1>
      <p className={styles.credit}>
        Click each Valorant agent exactly once without repeating — remember them
        all to win!
      </p>
    </header>
  );
}

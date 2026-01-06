import styles from "../styles/Card.module.css";

export default function Card({ agent, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      {agent.image ? (
        <img src={agent.image} alt={agent.name} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderName}>{agent.name}</span>
        </div>
      )}
      <p className={styles.name}>{agent.name}</p>
    </div>
  );
}

import styles from "../styles/Card.module.css";

export default function Card({ agent, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={agent.image} alt={agent.name} className={styles.image} />
      <p className={styles.name}>{agent.name}</p>
    </div>
  );
}

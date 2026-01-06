import Card from "./Card";
import styles from "../styles/CardGrid.module.css";

export default function CardGrid({ agents, onCardClick }) {
  return (
    <div className={styles.grid}>
      {agents.map((agent) => (
        <Card key={agent.id} agent={agent} onClick={() => onCardClick(agent)} />
      ))}
    </div>
  );
}

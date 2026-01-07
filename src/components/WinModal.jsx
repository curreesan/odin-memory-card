import styles from "../styles/WinModal.module.css";

export default function WinModal({ isOpen, onReset }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>YOU WIN!</h2>
        <button onClick={onReset} className={styles.resetButton}>
          Play Again
        </button>
      </div>
    </div>
  );
}

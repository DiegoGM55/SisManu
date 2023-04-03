import styles from '../styles/Login.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBoxContent}>
        <h2>Faça o login para continuar</h2>
        <form className={styles.form}>
          <div className={styles.input_container}>
            <input
              placeholder="Enter text"
              className={styles.inputField}
              type="text"
            />
            <label className={styles.inputLabel}>Enter text</label>
            <span className={styles.inputHighlight}></span>
          </div>
        </form>
      </div>
    </div>
  );
}

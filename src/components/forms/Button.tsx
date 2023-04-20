import styles from '../../styles/components/forms/Button.module.css';

interface Props {
  type: string;
  name: string;
}

function Button({ type, name }: Props) {
  return (
    <div>
      <input className={styles.button} type={type} name={name} />
    </div>
  );
}

export default Button;

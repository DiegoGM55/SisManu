import styles from '../../styles/components/forms/Input.module.css';

interface Props {
  type: string;
  label: string;
  name: string;
  InputValue: any;
}

const Input = ({ type, label, name, InputValue }: Props) => {
  return (
    <div className={styles.group}>
      <input
        required={true}
        type={type}
        className={styles.input}
        name={name}
        onChange={InputValue}
      />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.labelInput}>{label}</label>
    </div>
  );
};

export default Input;

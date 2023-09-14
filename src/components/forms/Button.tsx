import styles from '../../styles/components/forms/Button.module.css';

interface Props {
  type: string;
  name: string;
  value?: string;
}

const Button = ({ type, name, value }: Props) => {
  return (
    <div>
      <input
        className={styles.button}
        type={type}
        name={name}
        value={value ? value : 'Enviar'}
      />
    </div>
  );
};

export default Button;

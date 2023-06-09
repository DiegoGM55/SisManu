import styles from '../styles/Login.module.css';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import Link from 'next/link';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={`${styles.container} m-5`}>
      <div className={`${styles.loginBoxContent} w-full xl:w-[500px]`}>
        <h2>Faça o login para continuar</h2>
        <form className={styles.form}>
          <div className={styles.group}>
            <FaUser className={styles.icon} />
            <Input type="text" label="Nome de usuário" name="name" />
          </div>
          <div className={styles.group}>
            <FaLock className={styles.icon} />
            <Input type="password" label="Senha" name="password" />
          </div>
          <div>
            <Button type="submit" name="button" />
          </div>
        </form>
        <div>
          <Link className={styles.link} href="/">
            Primeiro acesso?
          </Link>

          <Link className={styles.link} href="/">
            Esqueceu sua senha?
          </Link>
        </div>
      </div>
    </div>
  );
}

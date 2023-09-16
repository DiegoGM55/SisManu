import styles from '../styles/Login.module.css';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const { push } = useRouter();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const InputValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/'
    });

    if (result?.url) {
      return push(result?.url);
    }
  };
  return (
    <div className={`${styles.container} m-5`}>
      <div className={`${styles.loginBoxContent} w-full xl:w-[500px]`}>
        <h2>Faça o login para continuar</h2>
        <form
          action=""
          method="post"
          autoComplete="off"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.group}>
            <FaUser className={styles.icon} />
            <Input
              type="text"
              label="Nome de usuário"
              name="email"
              InputValue={InputValue}
            />
          </div>
          <div className={styles.group}>
            <FaLock className={styles.icon} />
            <Input
              type="password"
              label="Senha"
              name="password"
              InputValue={InputValue}
            />
          </div>
          <div>
            <Button type="submit" name="realizarLogin" />
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
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/user/',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
};

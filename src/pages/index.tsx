import styles from '../styles/Login.module.css';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { FaUser, FaLock, FaGoogle } from 'react-icons/fa';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const { push } = useRouter();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const InputValue = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value
    });

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
        <div className={`${styles.title}`}>
          <h2>
            Este é o SisManu - Sistema de manutenção da FCT Prudente. Faça login
            com seu email constitucional para continuar
          </h2>
        </div>

        <div className="flex flex-col justify-center mt-3">
          <button
            onClick={() => signIn('google')}
            type="button"
            className={styles.link}
          >
            <FaGoogle className="" size={20} />
            <span>Faça login com o Google</span>
          </button>
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
        destination: '/user/home',
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

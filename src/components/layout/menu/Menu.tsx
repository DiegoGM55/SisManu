import { getSession, signOut, useSession } from 'next-auth/react';
import MenuItem from './MenuItem';
import { GetServerSideProps } from 'next';

const Menu = () => {
  const { data } = useSession();

  return (
    <div
      className={`flex flex-col w-[200px] min-w-[160px] bg-zinc-50 h-screen border-x-2 border-y-zinc-100`}
    >
      <MenuItem name="Inicio" adress="/user/home" />
      <MenuItem name="Relatar problemas" adress="/user/issueReport" />
      <MenuItem name="Vizualizar problemas" adress="/user/showReports" />
      {data?.user.role === 'admin' && (
        <MenuItem name="Lista de problemas" adress="/maintenance/reportsList" />
      )}

      <button className="menuItem" name="Sair" onClick={() => signOut()}>
        Sair
      </button>
    </div>
  );
};

export default Menu;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
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

import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="mt-5">
      <div className="w-auto border-b-2 border-b-blue border-dotted">
        <h1 className="text-blue font-bold">Sismanu - Sistema de manutenção</h1>
      </div>
      <div className="mt-7 text-center">
        <p className="font-bold">Seja Bem-vindo</p>
        <p className="mt-5 text-sm">
          Você está conectado ao módulo de manutenção
        </p>
      </div>
    </div>
  );
};

export default Home;

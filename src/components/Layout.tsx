import { useSession } from 'next-auth/react';
import Navbar from './layout/Navbar';
import Menu from './layout/menu/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  // Obtém a sessão atual
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      <div className="flex gap-6">
        {/* Mostra o menu se houver uma sessão */}
        {session ? (
          <>
            <Menu />
            <div className="w-full">
              <main>{props.children}</main>
            </div>
          </>
        ) : (
          <div className="w-full">
            <main>{props.children}</main>
          </div>
        )}
      </div>
    </>
  );
};

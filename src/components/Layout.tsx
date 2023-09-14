import { useAuth } from '../context/auth-context';
import Navbar from './layout/Navbar';
import Menu from './layout/menu/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />
      <div className="flex gap-6">
        {isAuthenticated ? (
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

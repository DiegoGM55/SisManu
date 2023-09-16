import Navbar from './layout/Navbar';
import Menu from './layout/menu/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex gap-6">
        {false ? (
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

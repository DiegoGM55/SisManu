import Navbar from '@/components/layout/Navbar';
import Menu from '@/components/menu/Menu';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex gap-6">
        <div className="w-[200px]">
          <Menu />
        </div>
        <div className="w-5/6">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

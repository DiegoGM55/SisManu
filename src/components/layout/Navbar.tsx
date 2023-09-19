import styles from '../../styles/components/layout/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} flex gap-14`}>
      <Image
        className={`${styles.logo} w-32 h-10`}
        src="/images/logotipo.png"
        width="90"
        height="29"
        alt="unesp logo"
        quality={5}
      />
      <div className="font-bold mt-4 mb-2 w-90">
        <h1 className="text-white text-sm">Sistema de manutenção</h1>
        <p className="text-zinc-200 text-xs">
          Faculdade de ciências e tecnologia - Câmpus de Presidente Prudente
        </p>
      </div>
    </div>
  );
};

export default Navbar;

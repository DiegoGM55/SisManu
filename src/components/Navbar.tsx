import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/images/logotipo.png"
        width="90"
        height="29"
        alt="unesp logo"
        quality={5}
      />
    </div>
  );
}

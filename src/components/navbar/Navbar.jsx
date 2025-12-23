import Link from 'next/link';
import Image from 'next/image'; 
import styles from './Navbar.module.css';

const Navbar = ({ list }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/icon.png" 
            alt="Alien Logo" 
            width={40} 
            height={40} 
            className={styles.logoImage}
          />
        </Link>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className={styles.navLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
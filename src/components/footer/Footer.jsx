import styles from './Footer.module.css';

const Footer = ({ list }) => {
  return (
    <footer className={styles.footer}>
      <h4>Social Media</h4>
      <ul className={styles.list}>
        {list.map((social, index) => (
          <li key={index} className={styles.item}>
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
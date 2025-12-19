import styles from './Navbar.module.css';

//  Navbar must receive 'list' array as a prop
const Navbar = ({ list }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {/*  Map the list and provide a unique key */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};




export default Navbar;
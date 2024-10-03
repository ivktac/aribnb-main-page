import logo from "../images/airbnb-logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Airbnb Logo" className={styles.navbar__logo} />
    </nav>
  );
}

export default Navbar;

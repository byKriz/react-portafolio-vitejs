import styles from "./Header.module.scss";
import logo from "../../assets/img/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={`${styles.navContainer} ${styles.navBar}`}>
        <span className={styles.logo}>
          <img src={logo} alt="logo.png" />
        </span>
      </nav>
    </header>
  );
};

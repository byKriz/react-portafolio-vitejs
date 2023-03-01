import styles from "./Header.module.scss";
import logo from "../../assets/img/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={`${styles.navContainer} ${styles.navBar}`}>
        <span className={styles.logo}>
          <img src={logo} alt="logo.png" />
        </span>
        <div className={styles.desktopMenu}>
          <ul className={styles.listItems}>
            <li>Sobre mi</li>
            <li>Servicios</li>
            <li>Portafolio</li>
            <li>Contacto</li>
          </ul>

        </div>
        <div className={styles.mobileMenu}>
          {openMenu ? (
            <AiOutlineClose className={styles.menuIcon} size={40} onClick={handleMenu}/>
          ) : (
            <AiOutlineMenu className={styles.menuIcon} size={40} onClick={handleMenu}/>
          )}
          <div className={!openMenu ? `${styles.dropDownMenu}` : `${styles.dropDownMenu} ${styles.openMenu}`}>

          <ul className={styles.listMobileItems}>
            <li>Sobre mi</li>
            <li>Servicios</li>
            <li>Portafolio</li>
            <li>Contacto</li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

import styles from "./header.module.css";
import Button from "./modules/Button.jsx";
import logo from "./pictures/logoipsum-261.svg";
import React from "react";

export const TopBar = () => {
  const links = [
    {
      href: "#",
      label: "Home",
    },
    {
      href: "#",
      label: "Services",
    },
    {
      href: "#",
      label: "About us",
    },
    { href: "#", label: "Purpurinis vakaras" },
  ];

  return (
    <div className={styles["App-header"]}>
      <div className={styles.leftSide}>
        <img src={logo} alt="logo" className={styles.appLogo} />

        <nav className={styles.navigation}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <Button>Login/Sign Up</Button>
    </div>
  );
};

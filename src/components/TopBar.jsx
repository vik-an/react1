import styles from "./header.module.css";
import Button from "./modules/Button.jsx";
import logo from "./pictures/logoipsum-261.svg";

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
      <img src={logo} alt="logo" className={styles.leftSide} />

      <nav className={styles.navigation}>
        {links.map((link) => (
          <a key={link.label} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <Button>Login/Sign Up</Button>
    </div>
  );
};

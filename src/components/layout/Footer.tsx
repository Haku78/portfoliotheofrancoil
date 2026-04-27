import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.brand}>
          <p>Théo Francoil</p>
          <span>Portfolio étudiant • Marketing digital & contenu</span>
        </div>
        <div class={styles.links}>
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#contact">Contact</a>
        </div>
        <div class={styles.contact}>          
          <a href="mailto:testPF@gmail.com">testPF@gmail.com</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <p class={styles.copyright}>© 2026 Théo Francoil. Tous droits réservés.</p>
    </footer>
  );
}

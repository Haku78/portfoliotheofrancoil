import { createSignal, onCleanup, onMount } from "solid-js";
import styles from "./Navbar.module.css";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Projets Marketing", href: "#projects" },
  { label: "Réalisations Créatives", href: "#creative" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = createSignal("home");
  let observer: IntersectionObserver | undefined;

  onMount(() => {
    const sections = links.map((item) => document.querySelector(item.href));
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => section && observer?.observe(section));
  });

  onCleanup(() => observer?.disconnect());

  return (
    <nav class={styles.navbar} aria-label="Navigation principale">
      <div class={styles.inner}>
        <a class={styles.brand} href="#home">Portfolio de Theo</a>
        <ul class={styles.menu}>
          {links.map((item) => (
            <li>
              <a
                class={`${styles.link} ${activeId() === item.href.slice(1) ? styles.active : ""}`.trim()}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div class={styles.actions}>
          <a class={styles.cta} href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

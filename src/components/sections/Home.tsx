import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" class={styles.heroSection}>
      <div class={styles.heroGrid}>
        <div class={styles.heroCopy}>
          <span class={styles.overline}>Portfolio étudiant</span>
          <h1>Je crée des expériences digitales convaincantes</h1>
          <p class={styles.lead}>
            Étudiant en marketing digital, je conçois des contenus et des stratégies qui rapprochent les marques de leurs publics.
          </p>

          <div class={styles.ctaGroup}>
            <Button href="#projects">Voir mes projets</Button>
            <Button href="#contact" variant="secondary">Me contacter</Button>
          </div>

          <div class={styles.highlights}>
            <GlassCard class={styles.highlightCard}>
              <p><strong>Stratégie sociale, UX et contenu</strong> adaptés à chaque projet.</p>
            </GlassCard>
            <GlassCard class={styles.highlightCard}>
              <p><strong>Design clair et accessible</strong> pour une lecture rapide et efficace.</p>
            </GlassCard>
          </div>
        </div>

        <div class={styles.heroPanel}>
          <GlassCard>
            <h2>En bref</h2>
            <ul>
              <li>Marketing digital et communication de marque</li>
              <li>Création de contenu & campagnes social media</li>
              <li>Conception UX, storytelling et pilotage de projet</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

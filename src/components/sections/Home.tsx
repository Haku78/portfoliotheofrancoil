import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" class={styles.heroSection}>
      <div class={styles.heroGrid}>
        <div class={styles.heroCopy}>
          <h1>Bienvenue sur mon Portfolio</h1>
          <p class={styles.lead}>
            Étudiant en marketing digital, j'ai du concevoir un portfolio pour presenter diverses projets realisés, en cours, stages ou même personels. Vous trouverez ici une sélection de mes projets marketing et créatifs, ainsi que des informations sur mes compétences et mon parcours.
          </p>

          <div class={styles.ctaGroup}>
            <Button href="#projects">Voir mes projets</Button>
            <Button href="#contact" variant="secondary">Me contacter</Button>
          </div>

          <div class={styles.highlights}>
            <GlassCard class={styles.highlightCard}>
              <p><strong>Projets Marketing</strong> en lien avec ma spécialité.</p>
            </GlassCard>
            <GlassCard class={styles.highlightCard}>
              <p><strong>Projets créatifs</strong> pour présenter mes autres competences.</p>
            </GlassCard>
          </div>
        </div>

        <div class={styles.heroPanel}>
          <GlassCard>
            <h2>En bref</h2>
            <ul>
              <li>Portfolio regroupant mes projets académiques et personnels</li>
              <li>Une vision de mon approche stratégique, créative et digitale</li>
              <li>Un aperçu concret de mes compétences en marketing et communication</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" title="À propos">
      <div class={styles.aboutGrid}>
        <div class={styles.textBlock}>
          <p>
            Étudiant en marketing digital, je conçois des projets concrets en communication, stratégie digitale, contenu social et formats créatifs.
          </p>
          <ul>
            <li>Stratégie centrée utilisateur et impact réel</li>
            <li>Contenus social media clairs, utiles et engageants</li>
            <li>Approche UX accessible, lisible et structurée</li>
            <li>Travail d’équipe, rigueur et adaptation rapide</li>
          </ul>
        </div>

        <GlassCard class={styles.summaryCard}>
          <h3>Formation</h3>
          <div class={styles.timeline}>
            <div class={styles.timelineItem}>
              <span>En cours</span>
              <p>
                Bachelor digital<br />
                (Graphisme, Photo/Vidéo, Dev web, Marketing…)<br />
                MyDigitalSchool – Montigny-le-Bretonneux
              </p>
            </div>
            <div class={styles.timelineItem}>
              <span>2022 - 2023</span>
              <p>
                Licence LLCER Parcours Anglais L1<br />
                (Apprentissage de la langue, histoire de l’Amérique et U.K, LV2 espagnol)<br />
                UVSQ – Montigny-le-Bretonneux
              </p>
            </div>
            <div class={styles.timelineItem}>
              <span>2020 - 2022</span>
              <p>
                Bac technologique STI2D option SIN<br />
                (protocoles réseaux, langage binaire/hexa décimal, langage C, programmation Arduino, création de pages HTML)<br />
                Lycée Emilie de Breteuil – Montigny-le-Bretonneux
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

import { createSignal } from "solid-js";
import { creatives } from "../../data/creatives";
import ProjectCard from "../ui/ProjectCard";
import GlassCard from "../ui/GlassCard";
import Section from "../ui/Section";
import Carousel from "../ui/Carousel";
import styles from "./Creative.module.css";

export default function Creative() {
  const [selectedIndex, setSelectedIndex] = createSignal(0);
  const project = () => creatives[selectedIndex()];

  return (
    <Section
      id="creative"
      title="Réalisations créatives"
      subtitle="Projets creatifs, avec du graphisme, de la vidéo, ou autres formats... "
    >
      <div class={styles.creativeGrid}>
        <div class={styles.cardList}>
          {creatives.map((item, index) => (
            <div class={styles.cardWrapper} onClick={() => setSelectedIndex(index)}>
              <ProjectCard
                title={item.title}
                description={item.description}
                tags={item.tags}
                selected={selectedIndex() === index}
              />
            </div>
          ))}
        </div>

        <GlassCard class={styles.detailPanel}>
          <h3>{project().title}</h3>
          {project().images && project().images.length > 0 && (
            <Carousel images={project().images} />
          )}
          <p>{project().description}</p>
          <ul>
            <li><strong>Objectif :</strong> {project().objectif}</li>
            <li><strong>Rôle :</strong> {project().role}</li>
            <li><strong>Outils :</strong> {project().outils}</li>
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}

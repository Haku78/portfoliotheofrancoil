import { createSignal, createMemo } from "solid-js";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import Section from "../ui/Section";
import Carousel from "../ui/Carousel";
import styles from "./Projects.module.css";

export default function Projects() {
  const [activeTag, setActiveTag] = createSignal("Tous");
  const [selectedIndex, setSelectedIndex] = createSignal(0);

  const tagOptions = ["Tous", "Stratégie", "Social", "Web", "UX"];

  const filteredProjects = createMemo(() =>
    activeTag() === "Tous"
      ? projects
      : projects.filter((project) => project.tags?.includes(activeTag()))
  );

  const projectCount = createMemo(() => filteredProjects().length);

  const project = createMemo(
    () => filteredProjects()[selectedIndex()] || filteredProjects()[0] || projects[0]
  );

  const selectTag = (tag: string) => {
    setActiveTag(tag);
    setSelectedIndex(0);
  };

  return (
    <Section
      id="projects"
      title="Projets Marketing"
      subtitle="Projets autour du marketing, étude de marché, campagnes social media, création de site web..."
    >
      <div class={styles.filterBar}>
        {tagOptions.map((tag) => (
          <Badge
            label={tag}
            active={tag === activeTag()}
            onClick={() => selectTag(tag)}
          />
        ))}
      </div>
      <div class={styles.projectHeader}>
        <p class={styles.projectCount}>
          {projectCount()} projet{projectCount() > 1 ? "s" : ""}
        </p>
        {activeTag() !== "Tous" && (
          <p class={styles.filterHint}>
            Filtrés par <strong>{activeTag()}</strong>
          </p>
        )}
      </div>
      <div class={styles.projectsGrid}>
        <div class={styles.projectList}>
          {filteredProjects().length === 0 ? (
            <GlassCard>
              <p>Aucun projet ne correspond à ce filtre pour le moment.</p>
            </GlassCard>
          ) : (
            filteredProjects().map((item, index) => (
              <div
                class={styles.cardWrapper}
                onClick={() => setSelectedIndex(index)}
              >
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  role={item.role}
                  summary={item.resultats}
                  selected={selectedIndex() === index}
                />
              </div>
            ))
          )}
        </div>

        <GlassCard class={styles.detailCard}>
          <h3>{project().title}</h3>
          <div class={styles.meta}>
            {project().tags?.map((tag) => (
              <span class={styles.metaTag}>{tag}</span>
            ))}
          </div>
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

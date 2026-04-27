import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    title: "Marketing digital",
    skills: ["Social media", "Calendriers éditoriaux", "Content strategy", "Community management"],
  },
  {
    title: "Contenu & création",
    skills: ["Storytelling", "Graphisme", "Podcast", "Montage vidéo"],
  },
  {
    title: "Outils & analyse",
    skills: ["Figma", "Excel", "Benchmark", "Audit UX"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle="Regroupées par catégories pour une lecture simple et efficace."
    >
      <div class={styles.skillsGrid}>
        {skillGroups.map((group) => (
          <GlassCard class={styles.skillCard}>
            <h3>{group.title}</h3>
            <div class={styles.chips}>
              {group.skills.map((skill) => (
                <span>{skill}</span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

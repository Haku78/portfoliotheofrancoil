import GlassCard from "./GlassCard";
import styles from "./ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  tags?: string[];
  role?: string;
  summary?: string;
  selected?: boolean;
};

export default function ProjectCard(props: Props) {
  return (
    <GlassCard class={`${styles.cardWrapper} ${props.selected ? styles.selected : ""}`.trim()} title={props.title}>
      <p class={styles.snippet}>{props.description}</p>
      {props.role && <p class={styles.metaText}>{props.role}</p>}
      {props.summary && <p class={styles.preview}>{props.summary}</p>}
      {props.tags && (
        <div class={styles.tags}>
          {props.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

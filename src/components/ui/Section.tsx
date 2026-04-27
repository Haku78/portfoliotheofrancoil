import styles from "./Section.module.css";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: any;
  class?: string;
};

export default function Section(props: Props) {
  return (
    <section id={props.id} class={`${styles.section} ${props.class ?? ""}`.trim()}>
      <div class={styles.header}>
        <p class={styles.overline}>{props.id}</p>
        <h2>{props.title}</h2>
        {props.subtitle ? <p class={styles.subtitle}>{props.subtitle}</p> : null}
      </div>
      {props.children}
    </section>
  );
}

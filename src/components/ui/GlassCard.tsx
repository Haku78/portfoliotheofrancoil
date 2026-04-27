import styles from "./GlassCard.module.css";

type Props = {
  title?: string;
  children: any;
  class?: string;
};

export default function GlassCard(props: Props) {
  return (
    <article class={`${styles.card} ${props.class ?? ""}`.trim()}>
      {props.title ? <h3>{props.title}</h3> : null}
      {props.children}
    </article>
  );
}

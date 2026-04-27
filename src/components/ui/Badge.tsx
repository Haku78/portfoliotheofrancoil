import styles from "./Badge.module.css";

type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Badge(props: Props) {
  return (
    <button
      type="button"
      class={`${styles.badge} ${props.active ? styles.active : ""}`.trim()}
      onClick={props.onClick}
      aria-pressed={props.active ? "true" : "false"}
    >
      {props.label}
    </button>
  );
}

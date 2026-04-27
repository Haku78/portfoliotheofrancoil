import styles from "./Button.module.css";

type Props = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
  children: any;
  class?: string;
  ariaLabel?: string;
};

export default function Button(props: Props) {
  const className = `${styles.button} ${styles[props.variant ?? "primary"]} ${props.class ?? ""}`.trim();

  if (props.href) {
    return (
      <a class={className} href={props.href} aria-label={props.ariaLabel}>
        {props.children}
      </a>
    );
  }

  return (
    <button
      class={className}
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
}

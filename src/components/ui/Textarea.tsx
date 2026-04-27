import styles from "./Textarea.module.css";

type Props = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
};

export default function Textarea(props: Props) {
  return (
    <label class={styles.field}>
      <span>{props.label}</span>
      <textarea
        class={styles.control}
        name={props.name}
        required={props.required}
        placeholder={props.placeholder}
        rows={6}
      />
    </label>
  );
}

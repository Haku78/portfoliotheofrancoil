import styles from "./Input.module.css";

type Props = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
};

export default function Input(props: Props) {
  return (
    <label class={styles.field}>
      <span>{props.label}</span>
      <input
        class={styles.control}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
      />
    </label>
  );
}

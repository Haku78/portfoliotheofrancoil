import { createSignal } from "solid-js";
import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import styles from "./Contact.module.css";

type StatusInfo = { type: "success" | "error" | ""; message: string };

export default function Contact() {
  const [status, setStatus] = createSignal<StatusInfo>({ type: "", message: "" });
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xkgdyezg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message envoyé avec succès. Je vous répondrai rapidement." });
        form.reset();
      } else {
        setStatus({ type: "error", message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." });
      }
    } catch {
      setStatus({ type: "error", message: "Erreur réseau. Vérifiez votre connexion et réessayez." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Envoyez-moi un message rapide ou utilisez mes coordonnées directes."
    >
      <div class={styles.content}>
        <form class={styles.contactForm} onSubmit={handleSubmit} aria-busy={loading()}> 
          <Input label="Nom / Prénom" name="name" required placeholder="Votre nom" />
          <Input label="Email" name="email" type="email" required placeholder="Votre adresse email" />
          <Textarea label="Message" name="message" required placeholder="Votre message" />
          <Button type="submit" variant="primary" disabled={loading()}>
            {loading() ? "Envoi..." : "Envoyer"}
          </Button>
          <p
            class={`${styles.status} ${status().type ? styles[status().type] : ""}`.trim()}
            role="status"
            aria-live="polite"
          >
            {status().message}
          </p>
        </form>

        <div class={styles.contactMeta}>
          <GlassCard>
            <h3>Contact alternatif</h3>
            <p>Par email : <a href="theo.francoil@bbox.fr">theo.francoil@bbox.fr</a></p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/th%C3%A9o-francoil-52b72a239/" target="_blank" rel="noreferrer">linkedin.com</a></p>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}

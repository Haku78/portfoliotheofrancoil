import { createSignal, onCleanup, For, onMount, createEffect } from "solid-js";
import "./Carousel.css";

type Props = {
  images: string[];
  isPaused?: () => boolean;
};

export default function Carousel(props: Props) {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let intervalId: number | undefined;

  const startCarousel = () => {
    if (props.images.length <= 1) return;
    
    stopCarousel(); // S'assurer qu'il n'y a pas d'intervalle en double
    
    intervalId = setInterval(() => {
      const paused = props.isPaused?.() ?? false;
      if (!paused) {
        setCurrentIndex((prev) => (prev + 1) % props.images.length);
      }
    }, 2500) as unknown as number;
  };

  const stopCarousel = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  };

  onMount(() => {
    startCarousel();
  });

  onCleanup(() => {
    stopCarousel();
  });

  // Redémarrer le carrousel quand les images changent
  createEffect(() => {
    props.images; // Suivre les changements d'images
    setCurrentIndex(0); // Réinitialiser à la première image
    startCarousel();
  });
  
  return (
    <div class="carousel">
      <For each={props.images}>
        {(image, index) => (
          <img
            src={image}
            alt={`Image ${index() + 1}`}
            class={`carousel-image ${currentIndex() === index() ? "active" : ""}`}
          />
        )}
      </For>
    </div>
  );
}


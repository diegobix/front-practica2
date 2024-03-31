import { FunctionComponent } from "preact";
import { HeroType } from "../types.ts";
import { useContext } from "preact/hooks";
import ModalContext from "../ModalContext.ts";

const Hero: FunctionComponent<{ hero: HeroType }> = ({ hero }) => {
  const { openModal } = useContext(ModalContext);

  const toggleAudio = () => {
    if (!hero.sound) return;
    const playIcon = document.getElementById(`play${hero.sound}`);
    const pauseIcon = document.getElementById(`pause${hero.sound}`);

    const audioElement = document.getElementById(
      hero.sound,
    )! as HTMLAudioElement;
    if (audioElement.paused) {
      audioElement.play();
      playIcon?.classList.add("hidden");
      pauseIcon?.classList.remove("hidden");
    } else {
      audioElement.pause();
      playIcon?.classList.remove("hidden");
      pauseIcon?.classList.add("hidden");
    }
  };

  return (
    <div class="hero">
      <a href={`/hero/${hero.name}`}>
        <img src={hero.image} alt={hero.name} />
      </a>
      <audio src={hero.sound} id={hero.sound}></audio>
      <div class="info">
        <button class="audio" onClick={toggleAudio}>
          <i class="fa-solid fa-pause hidden" id={`pause${hero.sound}`}></i>
          <i class="fa-solid fa-play" id={`play${hero.sound}`}></i>
        </button>
        <h3>{hero.name}</h3>
        <button onClick={() => openModal(hero.name)} class="delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { FunctionComponent } from "preact";
import { HeroType } from "../types.ts";
import useModal from "../useModal.ts";
import { useContext } from "preact/hooks";
import ModalContext from "../ModalContext.ts";

const Hero: FunctionComponent<{ hero: HeroType }> = ({ hero }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <div class="hero">
      <img src={hero.image} alt={hero.name} />
      <div class="info" href={`/hero/${hero.name}`}>
        <h3>{hero.name}</h3>
        <button onClick={openModal}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { FunctionComponent } from "preact";
import { HeroType } from "../types.ts";
import Column from "../components/Column.tsx";
import DeleteForm from "./DeleteForm.tsx";
import useModal from "../useModal.ts";
import ModalContext from "../ModalContext.ts";

const Gallery: FunctionComponent<{ heroes: HeroType[]; columns: number }> = (
  { heroes, columns },
) => {
  const cols: HeroType[][] = Array.from({ length: columns }, () => []);
  heroes.forEach((hero, i) => cols[i % columns].push(hero));

  const { showModal, openModal, closeModal, deleteName } = useModal();

  return (
    <>
      {showModal && <DeleteForm name={deleteName} closeModal={closeModal} />}
      <div class={`gallery ${showModal ? "modal" : ""}`}>
        <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
          {cols.map((heroes) => <Column heroes={heroes} />)}
        </ModalContext.Provider>
      </div>
    </>
  );
};

export default Gallery;

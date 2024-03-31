import { createContext } from "preact";

const ModalContext = createContext({
  showModal: false,
  openModal: (name: string) => {},
  closeModal: () => {},
});

export default ModalContext;

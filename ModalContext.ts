import { createContext } from "preact";

const ModalContext = createContext({
  showModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;

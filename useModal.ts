import { useState } from "preact/hooks";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Return an object exposing the state and functions
  return { showModal, openModal, closeModal };
};

export default useModal;

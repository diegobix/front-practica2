import { useState } from "preact/hooks";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleteName, setDeleteName] = useState("");

  const openModal = (name: string) => {
    setShowModal(true);
    setDeleteName(name);
  };
  const closeModal = () => {
    setShowModal(false);
    setDeleteName("");
  };

  // Return an object exposing the state and functions
  return { showModal, openModal, closeModal, deleteName };
};

export default useModal;

import React from "react";
import Modal from "react-modal";
import Input from "./Input";
import Button from "./Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalComponent({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 border-b border-gray-200 pb-4 mb-4">
        Nova Reserva
      </h2>
      <form className="flex flex-col gap-4 w-md">
        <Input label="Nome" name="name" type="text" />
        <Input label="Data de Checkin" name="checkin" type="date" />
        <Input label="Data de Checkout" name="checkout" type="date" />
        <Input label="Hóspedes" name="guests" type="number" />
        <Button text="Salvar" />
      </form>
    </Modal>
  );
}

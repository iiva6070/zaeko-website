"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import { ContactSection } from "./ContactSection";
import "./ContactModal.css";

export function ContactModal({
  buttonClassName,
}: {
  buttonClassName?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        onClick={openModal}
      >
        Kontaktirajte nas
      </button>

      <dialog
        ref={dialogRef}
        className="contactModal"
        aria-label="Kontaktirajte nas"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
      >
        <div className="contactModalContent">

          <button
            type="button"
            className="contactModalClose"
            onClick={closeModal}
            aria-label="Zatvori kontakt formu"
          >
            <X size={24} />
          </button>

          <ContactSection />

        </div>
      </dialog>
    </>
  );
}
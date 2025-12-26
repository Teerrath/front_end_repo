type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

import "./index.css";

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center">
      {/* Overlay */}
      {/* {title} */}
      <div
        className="absolute inset-0 bg-black/90  bg-opacity-60 "
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className="relative z-10 w-[90%] max-w-lg bg-white rounded-xl shadow-xl small-modal-m"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
       

        {/* Body */}
        <div className="py-5 px-15">{children}</div>
      </div>
    </div>
  );
}

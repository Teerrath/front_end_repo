import { useEffect } from "react";

interface FullPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function FullPageModal({
  isOpen,
  onClose,
  title = "Modal",
  children,
}: FullPageModalProps) {
  // Disable background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-9999  animate-slideUp">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="text-3xl leading-none text-gray-400 hover:text-black"
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-72px)] overflow-y-auto p-6">
        {children}
      </div>
    </div>
  );
}

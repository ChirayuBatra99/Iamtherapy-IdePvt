import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal1({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}





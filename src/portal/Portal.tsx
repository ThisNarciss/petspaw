import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
}

const Portal: FC<IProps> = ({ children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const modalDiv = document.createElement("div") as HTMLDivElement;
    modalDiv.className = "modal-root";
    document.body.appendChild(modalDiv);
    setModalRoot(modalDiv);

    return () => {
      document.body.removeChild(modalDiv);
    };
  }, []);

  if (!modalRoot) {
    return null;
  }

  return createPortal(children, modalRoot);
};

export default Portal;

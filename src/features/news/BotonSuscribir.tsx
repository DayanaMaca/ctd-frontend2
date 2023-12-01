import React from "react";
import { BotonSuscribir } from "./styled";
import { INoticiasNormalizadas } from "./types";

interface IProps {
  setNoticia: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}

const SuscripcionBoton = ({ setNoticia }: IProps) => {
  const handleSuscribir = () => {
    setTimeout(() => {
      alert("Suscripto!");
      setNoticia(null);
    }, 1000);
  };

  return <BotonSuscribir onClick={handleSuscribir}>Suscríbete</BotonSuscribir>;
};

export default SuscripcionBoton;

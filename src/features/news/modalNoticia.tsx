import React from "react";
import { ContenedorModal, TarjetaModal, CloseButton, ImagenModal, CotenedorTexto, TituloModal, DescripcionModal } from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { INoticiasNormalizadas } from "./types";
import BtnSuscribir from "./BotonSuscribir";

interface IProps {
  noticiaSeleccionada: INoticiasNormalizadas | null;
  setNoticiaSeleccionada: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}

const CardModal: React.FC<IProps> = ({ noticiaSeleccionada, setNoticiaSeleccionada }) => {
  const tituloPremium = "Suscríbete a nuestro Newsletter";
  const descripcionPremium = "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.";

  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setNoticiaSeleccionada(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={noticiaSeleccionada?.esPremium ? SuscribeImage : noticiaSeleccionada?.imagen} alt="mr-burns-excellent" />
        <CotenedorTexto>
          <TituloModal>{noticiaSeleccionada?.esPremium ? tituloPremium : noticiaSeleccionada?.titulo}</TituloModal>
          <DescripcionModal>{noticiaSeleccionada?.esPremium ? descripcionPremium : noticiaSeleccionada?.descripcion}</DescripcionModal>
          {noticiaSeleccionada?.esPremium && <BtnSuscribir setNoticia={setNoticiaSeleccionada} />}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default CardModal;

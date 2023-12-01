import React from "react";
import { ListaNoticias } from "./styled";
import { INoticiasNormalizadas } from "./types";
import { CardNoticia } from "./TarjetaNoticia";

interface IProps {
  noticias: INoticiasNormalizadas[];
  setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}

const ListadoNoticias: React.FC<IProps> = ({ noticias, setModal }) => (
  <ListaNoticias>
    {noticias.map((noticia) => (
      <CardNoticia key={noticia.id} noticia={noticia} setModal={setModal} />
    ))}
  </ListaNoticias>
);

export default ListadoNoticias;

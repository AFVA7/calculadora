
import {Boton} from './Boton';

export const BotonNumero = ({ numero, onClick }) => {
  return <Boton etiqueta={numero} onClick={() => onClick(numero)} />;
};


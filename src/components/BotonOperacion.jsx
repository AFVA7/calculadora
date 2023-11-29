
import {Boton} from './Boton';

export const BotonOperacion = ({ operacion, onClick }) => {
  return <Boton etiqueta={operacion} onClick={() => onClick(operacion)} />;
};


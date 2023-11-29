
import {Pantalla, Boton, BotonOperacion, BotonNumero} from './components';
import { useCalculadora } from './hooks/useCalculadora';

export const CalculadoraApp = () => {
  
  const { pantalla, manejarBotonApretado } = useCalculadora();

  return (
    <div className="calculadora">
      <Pantalla contenido={pantalla} />
      <Boton etiqueta="C" onClick={() => manejarBotonApretado('C')} />
      <Boton etiqueta="←" onClick={() => manejarBotonApretado('←')} />
      <BotonOperacion operacion="mod" onClick={() => manejarBotonApretado('mod')} />
      <BotonOperacion operacion="/" onClick={() => manejarBotonApretado('/')} />
      <BotonNumero numero="7" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonNumero numero="8" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonNumero numero="9" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonOperacion operacion="x" onClick={() => manejarBotonApretado('x')} />
      <BotonNumero numero="4" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonNumero numero="5" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonNumero numero="6" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonOperacion operacion="-" onClick={() => manejarBotonApretado('-')} />
      <BotonNumero numero="1" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonNumero numero="2" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonNumero numero="3" onClick={(numero) => manejarBotonApretado(numero)} />
      <BotonOperacion operacion="+" onClick={() => manejarBotonApretado('+')} />
      <BotonNumero numero="0" onClick={(numero) => manejarBotonApretado(numero)} />
      <Boton etiqueta="," onClick={() => manejarBotonApretado(',')} />
      <BotonOperacion operacion="%" onClick={() => manejarBotonApretado('%')} />
      <Boton etiqueta="=" onClick={() => manejarBotonApretado('=')} id='igual'/>
    </div>
  );
};



import { useState } from 'react';
import {Pantalla} from './components/Pantalla';
import {Boton} from './components/Boton';
import {BotonOperacion} from './components/BotonOperacion';
import {BotonNumero} from './components/BotonNumero';

export const CalculadoraApp = () => {
  const [pantalla, setPantalla] = useState('0');
  const [resultadoMostrado, setResultadoMostrado] = useState(false);
  const [operacionActual, setOperacionActual] = useState('');
  const [operandoAnterior, setOperandoAnterior] = useState(null);
  const [operacionPendiente, setOperacionPendiente] = useState(null);

  const limpiarPantalla = () => {
    setPantalla('0');
    setResultadoMostrado(false);
  };

  const borrarCaracter = () => {
    setPantalla(prevPantalla => prevPantalla.slice(0, -1) || '0');
  };

  const realizarOperacion = () => {
    const operandoActual = parseFloat(pantalla);

    if (!isNaN(operandoActual)) {
      if (operacionPendiente !== null && operandoAnterior !== null) {
        switch (operacionPendiente) {
          case '+':
            setPantalla(operandoAnterior + operandoActual);
            break;
          case '-':
            setPantalla(operandoAnterior - operandoActual);
            break;
          case 'x':
            setPantalla(operandoAnterior * operandoActual);
            break;
          case '/':
            setPantalla(operandoAnterior / operandoActual);
            break;
          case '%':
            setPantalla((operandoAnterior * operandoActual) / 100);
            break;
          case 'mod':
            setPantalla(operandoAnterior % operandoActual);
            break;
        }
        setResultadoMostrado(true);
        setOperandoAnterior(null);
        setOperacionPendiente(null);
      }
    }
  };

  const manejarBotonApretado = (botonApretado) => {
    if (resultadoMostrado) {
      limpiarPantalla();
    }

    switch (botonApretado) {
      case 'C':
        limpiarPantalla();
        setOperandoAnterior(null);
        setOperacionPendiente(null);
        break;
      case '←':
        borrarCaracter();
        break;
      case '=':
        realizarOperacion();
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
      case '%':
      case 'mod':
        realizarOperacion();
        setOperacionPendiente(botonApretado);
        setOperandoAnterior(parseFloat(pantalla));
        setResultadoMostrado(true);
        break;
      case ',':
        if (!pantalla.includes('.')) {
          setPantalla(prevPantalla => prevPantalla + '.');
        }
        break;
      default:
        setPantalla(prevPantalla =>
          prevPantalla === '0' ? botonApretado : prevPantalla + botonApretado
        );
        break;
    }
  };

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


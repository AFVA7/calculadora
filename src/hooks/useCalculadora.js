import { useState } from "react";

export const useCalculadora = () => {
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
      setPantalla((prevPantalla) => prevPantalla.slice(0, -1) || '0');
    };
  
    const realizarOperacion = () => {
      const operandoActual = parseFloat(pantalla);
  
      if (!isNaN(operandoActual)) {
        if (operacionPendiente !== null && operandoAnterior !== null) {
          let nuevoResultado = 0;
  
          switch (operacionPendiente) {
            case '+':
              nuevoResultado = operandoAnterior + operandoActual;
              break;
            case '-':
              nuevoResultado = operandoAnterior - operandoActual;
              break;
            case 'x':
              nuevoResultado = operandoAnterior * operandoActual;
              break;
            case '/':
              nuevoResultado = operandoAnterior / operandoActual;
              break;
            case '%':
              nuevoResultado = (operandoAnterior * operandoActual) / 100;
              break;
            case 'mod':
              nuevoResultado = operandoAnterior % operandoActual;
              break;
            default:
              nuevoResultado = operandoActual;
              break;
          }
  
          setPantalla(nuevoResultado.toString());
          setResultadoMostrado(true);
          setOperandoAnterior(nuevoResultado);
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
            setPantalla((prevPantalla) => prevPantalla + '.');
          }
          break;
        default:
          setPantalla((prevPantalla) =>
            prevPantalla === '0' ? botonApretado : prevPantalla + botonApretado
          );
          break;
      }
    };
  
    return {
      pantalla,
      manejarBotonApretado,
    };
  };
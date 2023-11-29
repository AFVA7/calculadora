
export const Boton = ({ etiqueta, onClick, id }) => {
  return (
    <button className="btn" onClick={onClick} id={id}>
      {etiqueta}
    </button>
  );
};


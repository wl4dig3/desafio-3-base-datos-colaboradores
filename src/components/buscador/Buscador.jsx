// Buscador.jsx
import { useState } from "react";

const Buscador = ({ buscarColaborador, setColaboradoresFiltrados }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    buscarColaborador(e.target.value);
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
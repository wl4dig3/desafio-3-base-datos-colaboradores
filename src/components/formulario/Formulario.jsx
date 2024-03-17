// Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setError('Por favor completa todos los campos');
      return;
    }
    agregarColaborador({ nombre, correo, edad, cargo, telefono });
    setError('');
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input
            type="number"
            className="form-control"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Cargo:</label>
          <input
            type="text"
            className="form-control"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;

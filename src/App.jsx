// App.jsx
import  { useState } from 'react';
import Listado from './components/listado/Listado';
import Formulario from './components/formulario/Formulario';
import Buscador from './components/buscador/Buscador';
import Alert from './components/alert/Alerta';
import { BaseColaboradores } from './constans/BaseColaboradores';
import './App.css';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setMensaje('Colaborador agregado exitosamente');
    setTipoMensaje('success');
  };

  const buscarColaborador = (query) => {
    // Aquí puedes implementar la lógica de búsqueda por todos los campos
    // Puedes usar filter() para filtrar el arreglo de colaboradores según la query
    // y actualizar el estado con los resultados de la búsqueda
  };

  return (
    <div className="container mt-4">
      <Alert mensaje={mensaje} tipo={tipoMensaje} />
      <div className="row">
        <div className="col-md-6">
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
        <div className="col-md-6">
          <Buscador buscarColaborador={buscarColaborador} />
          <Listado colaboradores={colaboradores} />
        </div>
      </div>
    </div>
  );
};

export default App;

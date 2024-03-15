import './App.css';
import Table from 'react-bootstrap/Table';
import Formulario from './components/formulario/Formulario';
import Listado from './components/listado/Listado';
import Titulo from './components/titulo/Titulo';
import ListarColaboradores from './components/listado/ListarColaboradores';
import { BaseColaboradores } from './constans/BaseColaboradores';
import Buscador from './components/buscador/Buscador';

function App() {
  const cabeceraListado = ["Nombre", "Correo","Edad", "Cargo", "Teléfono"]

  return (
    <>
      <Titulo
        estilos={{ fontSize: "2rem", marginBottom: "1rem" }}
        textoTitulo="Agregar colaborador"
      />
      <Formulario />
      <Buscador />
      <Listado>
        <Table className="mt-2" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {cabeceraListado.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          {BaseColaboradores.map((item) => (
            <ListarColaboradores
              key={item.id}
              id={item.id}
              nombre={item.nombre}
              email={item.correo}
              edad={item.edad}
              cargo={item.cargo}
              telefono={item.telefono}
            />
          ))}
        </Table>
      </Listado>
      
    </>
  );
}

export default App

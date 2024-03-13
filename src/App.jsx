import './App.css';
import Table from 'react-bootstrap/Table';
import Formulario from './components/formulario/Formulario';
import Listado from './components/listado/Listado';
import Titulo from './components/titulo/Titulo';
import ListarColaboradores from './components/listado/ListarColaboradores';
import { BaseColaboradores } from './constans/BaseColaboradores';

function App() {
  const cabeceraListado = ["Nombre", "Correo","Edad", "Cargo", "Teléfono"]

  return (
    <>
      <Titulo
        estilos={{ fontSize: "2rem", marginBottom: "1rem" }}
        textoTitulo="Agregar colaborador"
      />
      <Formulario />
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
          {/* <ListarColaboradores id={BaseColaboradores.map((item) => item.id)} /> */}
          {BaseColaboradores.map((item, index) => (
            <ListarColaboradores
              key={index}
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

import Table from 'react-bootstrap/Table';
import ListarColaboradores from './ListarColaboradores';

function Listado() {
    const cabeceraListado = ["Nombre", "Correo","Edad", "Cargo", "Teléfono"]
  return (
    <Table className='mt-2' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {cabeceraListado.map((item, index)=> <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <ListarColaboradores />
    </Table>
  )
}

export default Listado
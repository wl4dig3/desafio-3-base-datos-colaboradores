import PropTypes from 'prop-types';

function ListarColaboradores({ id, nombre, email, edad, cargo, telefono }) {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{nombre}</td>
        <td>{email}</td>
        <td>{edad}</td>
        <td>{cargo}</td>
        <td>{telefono}</td>
      </tr>
    </tbody>
  );
}
ListarColaboradores.prototype = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  cargo: PropTypes.string.isRequired,
}
export default ListarColaboradores
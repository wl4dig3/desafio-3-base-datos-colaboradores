
function ListarColaboradores({id, nombre, email, edad, cargo, telefono}) {
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
  )
}

export default ListarColaboradores
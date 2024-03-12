import {useState} from 'react'
import './Formulario.css';
import Button from 'react-bootstrap/Button';
import Alerta from '../alert/Alerta';


function Formulario() {

  let valorInicial = {
    nombreColaborador: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: '',
  };
const [ err, setErr] = useState(null);
const [exito, setExito] = useState(null);

  const [dataFormulario, setDataFormulario] = useState(valorInicial);

  const handleChange = (e) => {
  setDataFormulario( (estadoPrevio) => ({...estadoPrevio, [e.target.name]: e.target.value}));
  };


  const enviar = () => {
    if (
      dataFormulario.nombreColaborador == '' ||
      dataFormulario.email == '' ||
      dataFormulario.edad == '' ||
      dataFormulario.cargo == '' ||
      dataFormulario.telefono == ''
      ){
      return setErr(true)

}  else {
  setErr(false)
  setExito(true)
}
  }

  return (
    <section className="section-formulario">
        <h2>Agregar colaborador</h2>
      <input
        placeholder="Nombre Colaborador"
        name="nombreColaborador"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="email colaborador"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <input
        placeholder="Edad del colaborador"
        name="edad"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Cargo del colaborador"
        name="cargo"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Teléfono del colaborador"
        name="telefono"
        type="text"
        onChange={handleChange}
      />
      <Button onClick={enviar} variant="info" size="md">
        Agregar Colaborador
      </Button>
      {err ? (
        <Alerta color="danger" mensaje="Completa todos los campos!" />
      ) : null}
      {exito ? <Alerta color="success" mensaje="Registro exitoso!" /> : null}
    </section>
  );
}


export default Formulario;
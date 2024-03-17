import {useState} from 'react'
import './Formulario.css';
import Button from 'react-bootstrap/Button';
import Alerta from '../alert/Alerta';


function Formulario({agregarColaborador}) {

  let valorInicial = {
    nombreColaborador: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: '',
  };
const [ err, setErr] = useState(null);
const [exito, setExito] = useState(null);
const [colaborador, setColaborador] = useState("");
const [colaboradores, setColaboradores] = useState([]);

  const [dataFormulario, setDataFormulario] = useState(valorInicial);

  const handleChange = (e) => {
  setDataFormulario( (estadoPrevio) => ({...estadoPrevio, [e.target.name]: e.target.value}));
  setColaboradores([...colaboradores, dataFormulario]);
  console.log(colaboradores)
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
  setDataFormulario(valorInicial) // TODO: no funciona el limpiar el formulario
  setColaboradores([...colaboradores, dataFormulario])
  agregarColaborador({
    nombre: dataFormulario.nombreColaborador,
    email: dataFormulario.email,
    edad: dataFormulario.edad,
    cargo: dataFormulario.cargo,
    telefono: dataFormulario.telefono
  })
  setErr(false)
  setExito(true)

}
  };

  const HandleSubmit = (e) => {
    e.preventDefault()
    alert('enviando formulario');
  }

  return (
    <section>
      <form
        onSubmit={HandleSubmit}
        className="section-formulario"
        action=""
      >
        <input
          placeholder="Nombre Colaborador"
          name="nombreColaborador"
          type="text"
          onChange={handleChange}
          value={colaborador.nombre}
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
      </form>
      {err ? (
        <Alerta color="danger" mensaje="Completa todos los campos!" />
      ) : null}
      {exito ? <Alerta color="success" mensaje="Registro exitoso!" /> : null}
    </section>
  );
}


export default Formulario;
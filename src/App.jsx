import './App.css';
import Formulario from './components/formulario/Formulario';
import Listado from './components/listado/Listado';
import Titulo from './components/titulo/Titulo';
Listado

function App() {
  

  return (
    <>
      <Titulo estilos={{ fontSize: "2rem", marginBottom: "1rem" }}  textoTitulo="Agregar colaborador" />
      <Formulario />
      < Listado />
    </>
  )
}

export default App

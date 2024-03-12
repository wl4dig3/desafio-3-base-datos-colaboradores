import Alert from 'react-bootstrap/Alert';

// eslint-disable-next-line react/prop-types
function Alerta({mensaje, color}) {
  return <Alert variant={color}>{mensaje}</Alert>;
}

export default Alerta;

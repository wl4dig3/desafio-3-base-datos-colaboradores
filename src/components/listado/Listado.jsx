import PropTypes from 'prop-types'

function Listado({children}) {
    
  return <div>{children}</div>;
}

Listado.propTypes = {
  children: PropTypes.node.isRequired
};
export default Listado
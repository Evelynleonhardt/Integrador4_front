import { useContext } from 'react';
import './TablaFila.scss';
import ProductosContext from '../context/ProductosContext';

const TablaFila = ({ producto }) => {
  const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext);

  const handleEditar = (producto) => {
    console.log('Producto a editar..', producto.nombre);
    setProductoAEditar(producto);
  };

  const handleBorrar = (id) => {
    console.log('Borrando producto...', id);
    eliminarProductoContext(id);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button className="btn-editar" onClick={() => handleEditar(producto)}>Editar</button>
        <button className="btn-borrar" onClick={() => handleBorrar(producto.id)}>Borrar</button>
      </td>
    </tr>
  );
}

export default TablaFila;

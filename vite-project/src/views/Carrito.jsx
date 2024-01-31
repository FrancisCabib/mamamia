import React, { useContext } from 'react';
import { pizzaContext } from '../context/PizzaProvider';
import ItemsCarrito from '../components/ItemsCarrito';
import { formatoPrecio } from '../js/formatearMoneda';

const Carrito = () => {
  const { listaPizzas, precioTotal, setPizzasCarrito, setListaPizzas, pizzasCarrito } = useContext(pizzaContext);

  const procesarCompra = () => {
    alert(`Importe total de la compra: ${formatoPrecio.format(precioTotal)}`);
    setListaPizzas([]);
    setPizzasCarrito([]);
  };

  const renderizarContenidoCarrito = listaPizzas.length > 0 
    ? listaPizzas.map(pizza => {
        const cantidadEnCarrito = pizzasCarrito.filter(p => p.id === pizza.id).length;
        return <ItemsCarrito key={pizza.id} pizzaAgregada={pizza} cantidadPizzas={cantidadEnCarrito} />;
      })
    : <div className='carroVacio'>El carrito está vacío.</div>;

  return (
    <div className='container containerCarrito'>
      <h1>Resumen del Carrito</h1>
      <div className='elementosCarrito'>
        {renderizarContenidoCarrito}
      </div>
      <div className='totalIrAPagar'>
        <h2>Total a Pagar: {formatoPrecio.format(precioTotal)}</h2>
        <button onClick={procesarCompra} className='botonPagar'>Ir a Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;

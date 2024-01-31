import React, { useState, useContext } from 'react';
import { pizzaContext } from '../context/PizzaProvider';
import { formatoPrecio } from '../js/formatearMoneda';
import { capitalizeStr } from '../js/capitalize';

function ItemsCarrito({ pizzaAgregada, cantidadPizzas }) {
  const [contador, setContador] = useState(cantidadPizzas);
  const { pizzasCarrito, setPizzasCarrito, listaPizzas, setListaPizzas } = useContext(pizzaContext);

  const actualizarCantidad = (accion) => {
    let nuevaCantidad = contador;
    let carritoActualizado = [...pizzasCarrito];

    if (accion === 'aumentar' && nuevaCantidad < 10) {
      nuevaCantidad++;
      carritoActualizado.push(pizzaAgregada);
    } else if (accion === 'disminuir' && nuevaCantidad > 1) {
      nuevaCantidad--;
      const indice = carritoActualizado.lastIndexOf(pizzaAgregada);
      carritoActualizado.splice(indice, 1);

      if (nuevaCantidad === 1) {
        setListaPizzas(prevLista => prevLista.filter(pizza => pizza.id !== pizzaAgregada.id));
      }
    }

    setContador(nuevaCantidad);
    setPizzasCarrito(carritoActualizado);
  };

  return (
    <div className='itemsCarrito'>
      <div className='itemsCarrito-img'>
        <img src={pizzaAgregada.img} alt={pizzaAgregada.name} />
        <h4>{capitalizeStr(pizzaAgregada.name)}</h4>
      </div>
      <div className='itemsCarrito-precioButtons'>
        <p>{formatoPrecio.format(pizzaAgregada.price * contador)}</p>
        <button onClick={() => actualizarCantidad('disminuir')}>-</button>
        <span>{contador}</span>
        <button onClick={() => actualizarCantidad('aumentar')}>+</button>
      </div>
    </div>
  );
}

export default ItemsCarrito;

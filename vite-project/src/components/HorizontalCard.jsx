import React from 'react'
import { formatoPrecio } from '../js/formatearMoneda'
import { capitalizeStr } from '../js/capitalize'
import { pizzaContext } from '../context/PizzaProvider'
import { useContext } from 'react'

const HorizontalCard = ({pizzaSeleccionada}) => {

  const {pizzasCarrito, setPizzasCarrito, listaPizzas, setListaPizzas} = useContext(pizzaContext);

  function agregarAlCarrito(){
    setPizzasCarrito([...pizzasCarrito, pizzaSeleccionada]);
    if(!listaPizzas.some(item => item.id === pizzaSeleccionada.id)){
      setListaPizzas([...listaPizzas, pizzaSeleccionada])
    }

  }

  return (
    <div className='container containerDetails'>
      <div className='imgContainer'>
        <img src={pizzaSeleccionada.img} alt={pizzaSeleccionada.name} />
      </div>
      <div className='detailsContainer'>
        <div className="details">
          <h1>{capitalizeStr(pizzaSeleccionada.name)}</h1>
          <hr />
          <p>{pizzaSeleccionada.desc}</p>
        </div>
        <div>
          <h5>Ingredientes:</h5>
          <ul className='ingredientes ingredientesDetails'>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[0])}</li>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[1])}</li>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[2])}</li>
            <li>🍕{capitalizeStr(pizzaSeleccionada.ingredients[3])}</li>
          </ul>
        </div>
        <div className="priceAndButtonDetails">
          <h2>
            Precio: {formatoPrecio.format(pizzaSeleccionada.price)}
          </h2>
          <button onClick={agregarAlCarrito}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
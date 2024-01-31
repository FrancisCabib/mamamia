import HorizontalCard from '../components/HorizontalCard';
import { useParams } from 'react-router-dom';
import pizzas from "../json/pizzas.json"
import { useState } from 'react';

const PizzaDetails = () => {

  const [pizzaData] = useState(pizzas)

  const {id} = useParams();
  const pizzaSeleccionada = pizzaData.find((pizza)=>{
    return pizza.id === id;
  })

  return (
    <>
      <HorizontalCard pizzaSeleccionada = {pizzaSeleccionada} />
    </>
  )
}

export default PizzaDetails
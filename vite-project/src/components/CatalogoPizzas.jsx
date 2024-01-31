import React, { useContext } from 'react';
import MyCard from './MyCard';
import { pizzaContext } from '../context/PizzaProvider';

function CatalogoPizzas() {
  const { pizzaData } = useContext(pizzaContext);

  return (
    <div className="pizzas-container">
      {pizzaData.slice(0, 6).map(pizza => (
        <MyCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default CatalogoPizzas;

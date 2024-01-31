import React, { useState, useEffect, createContext } from 'react';
import pizzas from "../json/pizzas.json";

export const pizzaContext = createContext();

function PizzaProvider({ children }) {
  const [pizzaData, setPizzaData] = useState(pizzas);
  const [pizzasCarrito, setPizzasCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [listaPizzas, setListaPizzas] = useState([]);

  useEffect(() => {
    const calcularPrecioTotal = () => {
      const total = pizzasCarrito.reduce((acumulado, pizza) => acumulado + pizza.price, 0);
      setPrecioTotal(total);
    };

    calcularPrecioTotal();
  }, [pizzasCarrito]);

  const contextoValor = {
    pizzaData,
    setPizzaData,
    pizzasCarrito,
    setPizzasCarrito,
    precioTotal,
    listaPizzas,
    setListaPizzas
  };

  return <pizzaContext.Provider value={contextoValor}>{children}</pizzaContext.Provider>;
}

export default PizzaProvider;

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatoPrecio } from '../js/formatearMoneda';
import { capitalizeStr } from '../js/capitalize';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { pizzaContext } from '../context/PizzaProvider';

function MyCard({pizza}) {

  const {setPizzasCarrito, pizzasCarrito, pizzaData, listaPizzas, setListaPizzas} = useContext(pizzaContext);

  const navigate = useNavigate();

  function setNavigate(e){
    e.preventDefault();
    navigate(`/pizza/${pizza.id}`)
  }
  function agregarAlCarrito(e){
    e.preventDefault();
    const pizzaEscogida = pizzaData.find((element)=>{
      return element.id === pizza.id;
    })
    setPizzasCarrito([...pizzasCarrito, pizzaEscogida])
    if(!listaPizzas.some(item => item.id === pizzaEscogida.id)){
      setListaPizzas([...listaPizzas, pizzaEscogida])
    }
    
  }

  return (
    <Card className='myCard' style={{ width: '17rem'}}>
      <Card.Img variant="top" src= {pizza.img} />
      <Card.Body className='cardTitle'>
        <Card.Title>{capitalizeStr(pizza.name)}</Card.Title>
      </Card.Body>
      <hr style={{margin:"8px", width: "85%", alignSelf: "center"}} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item >
          <h6>Ingredientes:</h6>
          <ul className='ingredientes'>
            <li>🍕{capitalizeStr(pizza.ingredients[0])}</li>
            <li>🍕{capitalizeStr(pizza.ingredients[1])}</li>
            <li>🍕{capitalizeStr(pizza.ingredients[2])}</li>
            <li>🍕{capitalizeStr(pizza.ingredients[3])}</li>
          </ul>
        </ListGroup.Item>
      </ListGroup>
      <hr />
      <Card.Body className='priceAndButtons'>
        <h5>{formatoPrecio.format(pizza.price)}</h5>
        <div className="buttons">
          <button onClick={setNavigate}>
            Ver Más
          </button>
          <button onClick={agregarAlCarrito}>
            Añadir
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
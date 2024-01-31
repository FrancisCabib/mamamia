import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import PizzaProvider from './context/PizzaProvider'
import { Routes, Route } from 'react-router-dom'
import PizzaDetails from './views/PizzaDetails'
import Carrito from './views/Carrito'

function App() {


  return (
    <PizzaProvider>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/pizza/:id' element = {<PizzaDetails />} />
        <Route path='/carrito' element = {<Carrito />} />
      </Routes>
    </PizzaProvider>
  )
}

export default App;
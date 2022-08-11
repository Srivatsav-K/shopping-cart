import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import Products from "./pages/Products"
import { useDispatch } from 'react-redux'
import { startGetProducts } from './actions/productActions'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetProducts())
  }, [dispatch])

  return (
    <div style={{ marginTop: '5rem' }}>

      <NavBar />

      <Route path='/' exact component={Products} />
      <Route path='/cart' component={Cart} />
    </div>
  )
}

export default App
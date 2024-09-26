import './index.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenid@ a la tienda online Herboristeria Natural" />
    </>
  )
}

export default App

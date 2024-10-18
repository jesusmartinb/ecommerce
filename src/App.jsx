import './index.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenid@ a la tienda online Herboristeria Natural" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting="Categorías" />} />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1 className="text-center">404 - Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './index.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme='dark' />
          <Routes>
            <Route path="/" element={<ItemListContainerWithHoc greeting="Bienvenid@ a la tienda online Herboristeria Natural" />} />
            <Route path="/category/:idCategory" element={<ItemListContainerWithHoc greeting="Categorías" />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1 className="text-center">404 - Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

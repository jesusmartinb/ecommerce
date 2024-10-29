import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

  return (
    <>
        <li className="nav-item">
            <Link className="nav-link" to="/cart">
                <div id="img-carrito" className="carrito">
                    <i className="fa-solid fa-cart-shopping">
                        <span className="contador-carrito" id="contador-carrito"> {totalQuantity()} </span>
                    </i> 
                </div>
                <div id="carrito"></div>
            </Link>
        </li>
    </>
  )
}

export default CartWidget

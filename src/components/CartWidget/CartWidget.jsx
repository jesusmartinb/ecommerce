
const CartWidget = () => {
  return (
    <>
        <li className="nav-item">
            <a className="nav-link" href="carrito.html">
                <div id="img-carrito" className="carrito">
                    <i className="fa-solid fa-cart-shopping">
                        <span className="contador-carrito" id="contador-carrito"> 0 </span>
                    </i> 
                </div>
                <div id="carrito"></div>
            </a>
        </li>
    </>
  )
}

export default CartWidget

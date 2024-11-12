import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const Cart = () => {

  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  const checkOut = false

  return (
    <div>
      <h2 className="mb-5">Productos en el carrito</h2>
      {
          cart.map((productCart) => (
            <div key={productCart.id} className="mb-3">
              <div className="row g-0 p-3">
                <div className="col-md-2">
                  <img src={productCart.image[0]} className="img-fluid rounded-start" width={100} alt={productCart.title} />
                </div>
                <div className="col-md-10">
                  <div className="card-body" style={{display: "flex", justifyContent: "space-around"}}>
                    <h5 className="card-title">{productCart.name}</h5>
                    <p className="card-text">Cantidad: {productCart.quantity}</p>
                    <p className="card-text">Precio/unidad: ${productCart.price}</p>
                    <p className="card-text">Subtotal: ${productCart.price * productCart.quantity}</p>
                    <button onClick={() => deleteProductById(productCart.id)} className="btn btn-danger">Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      }

      <p className="mt-1 p-2 text-end" style={{ marginRight: "150px" }}>Precio Total: ${totalPrice()}</p>
      <div className="mb-3 mt-5" style={{display: "flex", justifyContent: "center", cursor: (totalPrice()) > 0 ? '' : 'not-allowed', 'width': '164px', margin: '0 auto'}}>
        <button className="btn btn-danger" style={{ pointerEvents: (totalPrice()) > 0 ? '' : 'none', 'width': '164px', margin: '0 auto' }} onClick={() => deleteCart(checkOut)}>Vaciar carrito</button>
      </div>
      <div className="mb-3 mt-5" style={{display: "flex", justifyContent: "center", cursor: (totalPrice()) > 0 ? '' : 'not-allowed' }}>
      <Link className="btn btn-success" style={{ pointerEvents: (totalPrice()) > 0 ? '' : 'none', 'width': '164px', margin: '0 auto' }} to="/Checkout">Terminar la Compra</Link>
      </div>
    </div>
  )
}

export default Cart

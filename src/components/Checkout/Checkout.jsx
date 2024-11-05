import { useState, useContext } from 'react'
import FormCheckout from '../FormCheckout/FormCheckout'
import { CartContext } from '../../context/cartContext'
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        email: ''
    })

    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice } = useContext(CartContext)

    const { deleteCart } = useContext(CartContext)

    const handleChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            buyer: { ...formData },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, newOrder)
            .then((response) => setIdOrder(response.id))
            .catch((err) => console.log(err))
            .finally(() => {
                updateStock()
            })
    }

    const updateStock = () => {
        cart.map(({id, quantity, ...dataProduct}) => {
            const productRef = doc(db, 'products', id)
            setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity })
        })

        deleteCart()
    }


  return (
    <div>
        {
            idOrder === null ? (
                <FormCheckout 
                    formData={formData} 
                    handleChangeInput={handleChangeInput} 
                    handleSubmit={handleSubmit} />
            ) : (
                <div className="mb-3 mt-5" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h2>Su orden se subio correctamente!</h2>
                    <p>Por favor guarde su número de seguimiento: {idOrder}</p>
                    <Link className="btn btn-info" to="/">Volver al inicio</Link>
                </div>
            )
        }
      
    </div>
  )
}

export default Checkout

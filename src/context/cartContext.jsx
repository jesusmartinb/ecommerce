import { createContext, useState } from 'react';
import { toast } from 'react-toastify'

//creamos un contexto llamado CartContext
const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        const condicion = isProductInCart(newProduct.id)

        if(condicion){
            // sumar cantidad si el producto ya está en el carrito
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex((productCart) => productCart.id === newProduct.id)
            tempCart[findIndex].quantity += newProduct.quantity

            setCart(tempCart)
            toast.success('Producto añadido de nuevo al carrito')
        } else {
            // agregar producto al carrito si no está
            setCart([...cart, newProduct])
            toast.success('Producto añadido al carrito')
        }
    }

    // función que devuelve true o false dependiendo si el producto ya está en el carrito o no
    const isProductInCart = (idProduct) => {
        return cart.some((productCart) => productCart.id === idProduct)
    }

    // cantidad total de productos en el carrito
    const totalQuantity = () => {
        const quantity = cart.reduce((acc, productCart) => acc + productCart.quantity, 0)
        return quantity
    }

    // Precio total de la compra
    const totalPrice = () => {
        const price = cart.reduce((acc, productCart) => acc + (productCart.price * productCart.quantity), 0)
        return price
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(filterProducts)
        toast.success('Producto eliminado del carrito')
    }

    const deleteCart = () => {
        setCart([])
        toast.success('Carrito eliminado')
    }
    
    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}
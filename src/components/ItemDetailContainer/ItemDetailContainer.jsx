import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts()
            .then((data) => {
                const findProduct = data.find((prod) => prod.id === idProduct)
                setProducts(findProduct)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [idProduct])
  return (
    <div>
      {
        loading ? (<div>Cargando...</div>) : <ItemDetail product={products} />
      }
      
    </div>
  )
}

export default ItemDetailContainer

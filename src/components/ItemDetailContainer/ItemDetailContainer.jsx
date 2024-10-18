import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const { idProduct } = useParams()

    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((prod) => prod.id === idProduct)
                setProducts(findProduct)
        })
    }, [idProduct])
  return (
    <div>
      <ItemDetail product={products} />
    </div>
  )
}

export default ItemDetailContainer

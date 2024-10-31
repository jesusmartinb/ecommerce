import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../db/db'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    const getProductById = () => {
      const docRef = doc(db, 'products', idProduct)
      getDoc(docRef)
        .then((dataDb) => {
          const productDb = { id: dataDb.id, ...dataDb.data() }
          setProduct(productDb)
        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true)

        getProductById()
    }, [idProduct])
  return (
    <div>
      {
        loading ? (<div>Cargando...</div>) : <ItemDetail product={product} />
      }
      
    </div>
  )
}

export default ItemDetailContainer

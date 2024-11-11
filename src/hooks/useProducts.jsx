import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import db from '../db/db.js';

const useProducts = () => {

    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
    const [category, setCategory] = useState('Todos los productos')
    const [loading, setLoading] = useState(true)

    const getProducts = () => {
        const productsRef = collection(db, 'products')

        getDocs(productsRef)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })
                setProducts(productsDb)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, 'products')
        const queryCategories = query(productsRef, where('category', '==', idCategory))

        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })
                setProducts(productsDb)
            })
    }

    useEffect(() => {
        setLoading(true)
        
        if (idCategory) {
            
            switch (idCategory) {
                case 'nervioso':
                    setCategory('Sistema Nervioso')
                    break
                case 'digestivo':
                    setCategory('Sistema Digestivo')
                    break
                case 'respiratorio':
                    setCategory('Sistema Respiratorio')
                    break
                case 'oseo':
                    setCategory('Sistema Óseo y Articular')
                    break
                case 'general':
                    setCategory('General')
                    break
                case 'inmune':
                    setCategory('Sistema Inmune')
                    break
                case '':
                    setCategory('Todos los productos')
                    break
                default:
                    setCategory('Todos los productos')
                    break
            }
            getProductsByCategory()
            setLoading(false)
        } else {
            getProducts()
            setLoading(false)
            setCategory('Todos los productos')
        }

    }, [idCategory])

  return { products, category, loading }
}

export default useProducts

import { useEffect, useState } from "react"
// import { getProducts} from "../../data/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../db/db.js'


const ItemListContainer = ({greeting}) => {

    const greetingStyles = {
        color: 'black',
        fontSize: '1.3rem',
        fontWeight: 'lighter',
    }

    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
    const [category, setCategory] = useState('Todos los productos')

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
        } else {
            getProducts()
            setCategory('Todos los productos')
        }

    }, [idCategory])

  return (
    <>
        <main>
            <div className="header-sup">
                <div className="bienvenida text-center my-5">
                    <div className="bienve">
                        <h1>HERBORISTERÍA NATURAL</h1>
                            <div className="usuario"> {/* llamada a usuario */}
                            <p style={greetingStyles}>{greeting} <span style={{fontStyle: 'italic', fontWeight: 'normal'}} id="nombre-usuario">Jesús Martín Blanco</span></p>
                        </div>
                        <span id="nombre-usuario" className="name"></span>
                    </div>
                    <br />
                </div>
            </div>
            <div className="zona-productos my-4">
                <h2 className="text-center my-5">{category}</h2>
                <ItemList products={products} />
            </div>
        </main>
    </>
  )
}

export default ItemListContainer

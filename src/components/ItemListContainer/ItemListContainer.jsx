import { useEffect, useState } from "react"
import { getProducts} from "../../data/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

    const greetingStyles = {
        color: 'black',
        fontSize: '1.3rem',
        fontWeight: 'lighter',
    }

    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
    const [category, setCategory] = useState('Todos los productos')

    useEffect(() => {

        getProducts()
            .then((data) => {
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

                    const filterProducts = data.filter((product) => product.category === idCategory)
                    setProducts(filterProducts)
                    return
                } else {
                    setCategory('Todos los productos')
                    setProducts(data)
                }
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
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

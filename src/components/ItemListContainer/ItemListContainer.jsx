import { useEffect, useState } from "react"
import { getProducts} from "../../data/data"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {

    const greetingStyles = {
        color: 'black',
        fontSize: '1.3rem',
        fontWeight: 'lighter',
    }

    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
    }, [])

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
                <h2 className="text-center my-5">Todos los productos</h2>
                <ItemList products={products} />
            </div>
        </main>
    </>
  )
}

export default ItemListContainer

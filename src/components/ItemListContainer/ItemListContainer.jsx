import ItemList from "../ItemList/ItemList"
import Loading from '../Loading/Loading';
import hocFilterProducts from "../../hoc/hocFilterProducts"
import useProducts from "../../hooks/useProducts"


const ItemListContainer = ({ products }) => {

    const greetingStyles = {
        color: 'black',
        fontSize: '1.3rem',
        fontWeight: 'lighter',
    }

    const { category, loading } = useProducts()

  return (
    <>
        <main>
            <div className="header-sup">
                <div className="bienvenida text-center my-2">
                    <div className="bienve">
                        <h1>HERBORISTERÍA NATURAL</h1>
                            <div className="usuario"> {/* llamada a usuario */}
                            <p style={greetingStyles}>Bienvenid@ a la tienda online Herboristeria Natural <span style={{fontStyle: 'italic', fontWeight: 'normal'}} id="nombre-usuario">Jesús Martín Blanco</span></p>
                        </div>
                        <span id="nombre-usuario" className="name"></span>
                    </div>
                    <br />
                </div>
            </div>
            <div className="zona-productos my-3">
                <h2 className="text-center my-3">{category}</h2>
                {
                    loading ? (<Loading />) : <ItemList products={products} />
                }
            </div>
        </main>
    </>
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

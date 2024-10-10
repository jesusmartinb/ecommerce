import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {

    const greetingStyles = {
        color: 'black',
        fontSize: '1.3rem',
        fontWeight: 'lighter',
    }

    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(1)

    const onSubtract = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }

    }

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
            <ItemCount contador={contador} onAdd={onAdd} onSubtract={onSubtract} />
        </main>
    </>
  )
}

export default ItemListContainer

import './itemcount.css'

const ItemCount = ( { contador, onAdd, onSubtract } ) => {

  return (
    <div className="contador-con-boton">
        <div className="botones-contador">
            <button onClick={ onSubtract }>-</button>
            <span>{ contador }</span>
            <button onClick={ onAdd }>+</button>
        </div>
        <div className="boton-agregar-carrito">
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount

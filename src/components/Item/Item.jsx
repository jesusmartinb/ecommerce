import ItemCount from "../ItemCount/ItemCount"
import {useState} from 'react';

const Item = ( { product } ) => {

    const { id, name, description, brand, presentation, price, image, category, stock } = product

    const [contador, setContador] = useState(1)
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
    <li className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="card-producto card">
            <img src={image} alt={product.name} />
            <div className="card-body">
                <h5 className="nombre card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="marca">Marca: {brand}</p>
                <p className="presenta">Presentación: {presentation}</p>
                <p className="precio">Precio: {price}€</p>
            </div>
            <div className="card-footer text-center">
                <ItemCount stock={stock} contador={contador} onAdd={onAdd} onSubtract={onSubtract} />
            </div>
        </div>
    </li>
  )
}

export default Item

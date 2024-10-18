import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react';
import './itemDetail.css'

const ItemDetail = ( { product } ) => {

      const [contador, setContador] = useState(1)
    const [initial, setInitial] = useState(1)

    const onSubtract = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        if(contador < product.stock) {
            setContador(contador + 1)
        }
    }

  return (
    <div className="item-detail container">
      <img className="item-detail-img" src={product.image} alt={product.name} />
      <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Categoría: {product.category}</p>
          <p>Marca: {product.brand}</p>
          <p>Presentación: {product.presentation}</p>
          <p>Precio: {product.price}€</p>
          <p>Existencias: {product.stock}</p>
          <ItemCount stock={product.stock} contador={contador} onAdd={onAdd} onSubtract={onSubtract} />
      </div>
    </div>
  )
}

export default ItemDetail

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

    const [currentImage, setCurrentImage] = useState(product.image[0])

    const images = product.image.filter((image) => image !== currentImage)

  return (
    <div className="item-detail container">
      <div className="images-detail-container">
        <div className="secondary-images">
          {
            images.map((image) => (
              <img key={image} src={image} alt={product.name} onClick={() => setCurrentImage(image)} />
            ))
          }
        </div>
        <img className="item-detail-img main-image" src={currentImage} alt={product.name} />
      </div>
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

import { Link } from 'react-router-dom'
import './item.css'


const Item = ( { product } ) => {

    const { id, name, description, brand, presentation, price, image, category, stock } = product

  return (
    <li className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="card-producto card">
            <img src={image[0]} alt={name} />
            <div className="card-body">
                <h5 className="nombre card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="marca">Marca: {brand}</p>
                <p className="presenta">Presentación: {presentation}</p>
                <p className="precio">Precio: {price}€</p>
                <Link className="boton" to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    </li>
  )
}

export default Item

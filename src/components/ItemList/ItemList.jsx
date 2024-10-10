import Item from "../Item/Item"

const ItemList = ( { products } ) => {
  return (
    <div className="slider-container-tv cards-productos container">
        <ul className="row list-unstyled">
            {
                products.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            }
        </ul>
    </div>
  )
}

export default ItemList

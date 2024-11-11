import useProducts from '../hooks/useProducts'
import { useState } from 'react'
import './hocFilterProducts.css'

const hocFilterProducts = (Component) => {

    return function () {
        const { products } = useProducts()
        const [query, setQuery] = useState('')
        const [typeOrder, setTypeOrder] = useState('')

        const changeInput = (e) => {
            setQuery(e.target.value.toLowerCase())
        }

        const search = () => {
            let filterProducts = products.filter( (product) => (
                product.name.toLowerCase().includes(query)
            ))

            switch (typeOrder) {
                case 'nameasc':
                    filterProducts = filterProducts.sort((a, b) => a.name.localeCompare(b.name))
                    break
                case 'namedesc':
                    filterProducts = filterProducts.sort((a, b) => b.name.localeCompare(a.name))
                    break
                case 'minor':
                    filterProducts = filterProducts.sort((a, b) => a.price - b.price)
                    break
                case 'major':
                    filterProducts = filterProducts.sort((a, b) => b.price - a.price)
                    break
                default:
                    break
            }


            return filterProducts
        }

        return (
          <div className="filter-products">
            <div className="filters container">
                <input type="text" placeholder="Buscar producto" onChange={changeInput} />
                <select className='select' onChange={(e) => setTypeOrder(e.target.value)}>
                    <option value="">Ordenar</option>
                    <option value="minor">Menor precio primero</option>
                    <option value="major">Mayor precio primero</option>
                    <option value="nameasc">Nombre A-Z</option>
                    <option value="namedesc">Nombre Z-A</option>
                </select>
            </div>
            <Component products={search()} />
          </div>
        )
    }

}

export default hocFilterProducts

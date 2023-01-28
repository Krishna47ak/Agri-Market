import { useContext, useEffect } from 'react'
import { Context as ProductContext } from '../context/ProductContext'

export default () => {
    const { state: { products }, fetchProducts } = useContext(ProductContext)

    useEffect(() => {
        fetchProducts()
    }, [])

    return [products]
}

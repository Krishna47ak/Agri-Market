import { useContext } from 'react'
import { Context as AddCartContext } from '../context/AddCartContext'

export default () => {
    const { state: { cart }, addItems } = useContext(AddCartContext)

    const quatityCheck = (name, img, price, id) => {
        const qtyArr = cart.filter((item) => item.id === id )
        const qty = qtyArr.length + 1
        addItems(name, img, price, id, qty)
    }

    return [quatityCheck]
}

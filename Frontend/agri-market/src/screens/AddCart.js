import React, { useContext } from 'react'
import { Context as AddCartContext } from '../context/AddCartContext'

const AddCart = () => {
    const { state: { cart }, deleteItems } = useContext(AddCartContext)

    const listItems = cart.map((item) =>
        <li className='flex justify-between items-center' key={item.id} >
            <img className='h-40 rounded-xl' src={item.img} width={200} />
            <p className='text-xl font-semibold' >{item.name}</p>
            <p className='text-xl font-semibold ' >RS {item.price}/-</p>
            <div onClick={() => deleteItems(item.id)} >
                <i className="fas fa-trash text-2xl mr-20"></i>
            </div>
        </li>
    );

    return (
        <div className='mt-5 mx-5'>
            <p className='text-3xl font-semibold text-center my-5' > <i class="fas fa-shopping-basket text-[#00ff31] mx-3"></i>My Cart</p>
            <ul className=' space-y-5 ' >
                {listItems}
            </ul>
        </div>
    )
}

export default AddCart
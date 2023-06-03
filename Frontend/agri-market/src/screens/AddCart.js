import React, { useContext } from 'react'
import { Context as AddCartContext } from '../context/AddCartContext'

const AddCart = () => {
    const { state: { cart }, deleteItems, addQuantity, removeQuantity } = useContext(AddCartContext)

    const listItems = cart.map((item) =>
        <li className='flex items-center' key={item.id} >
            <img className='h-40 rounded-xl' src={item.img} width={200} />
            <p className='text-2xl font-semibold mx-20' >{item.name}</p>
            <div className=' bg-blue-100 p-2 text-xl font-semibold flex flex-row items-center justify-center rounded-lg ml-auto mr-36 ' >
                <button className='cursor-pointer' onClick={() => removeQuantity(item.id)} >-</button>
                <p className='bg-white px-6 py-1 mx-2 w-16 text-center rounded-md' >{item.qty}</p>
                <button className='cursor-pointer' onClick={() => addQuantity(item.id)} >+</button>
            </div>
            <p className='text-xl font-semibold mr-36 w-24 ' >Rs. {item.price * item.qty}/-</p>
            <div onClick={() => deleteItems(item.id)} >
                <i className="fas fa-trash text-2xl mr-16 hover:text-red-700 "></i>
            </div>
        </li>
    );

    return (
        <div className='mt-5 mx-5'>
            <p className='text-3xl font-semibold text-center my-5' > <i className="fas fa-shopping-basket text-[#00ff31] mx-3"></i>My Cart</p>
            <ul className=' space-y-5 ' >
                {listItems}
            </ul>
            {cart.length > 0 && (
                <div className='flex justify-end m-14 ' >
                    <button className='bg-green-500 p-5 px-20 text-white font-bold text-xl hover:scale-105 duration-700 shadow-[-1px_-2px_8px_3px_#00000024,-1px_-2px_8px_3px_#00000024,-1px_-2px_8px_3px_#00000024] ' >
                        Check Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default AddCart
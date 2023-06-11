import { useContext } from 'react'
import useQuatity from '../../hooks/useQuatity'
import { Context as AlertContext } from '../../context/AlertContext'

const SliderCard = ({ item }) => {
    const { setAlert } = useContext(AlertContext)

    const [quatityCheck] = useQuatity()

    return (
        <div className=' bg-gradient-to-t from-gray-400 to-white bg py-7 rounded-xl border border-gray-300 ' >
            <div>
                <img className='mx-auto mb-2 rounded-xl h-44 hover:scale-110 duration-700' src={item.img} alt='could not load' width={200} />
            </div>
            <div className='mt-5' >
                <p className='text-center text-[#130f40] text-2xl font-semibold my-1' >{item.name}</p>
            </div>
            <div>
                <p className='text-center text-black font-semibold text-lg my-1' >RS {item.price}/-</p>
            </div>
            <div className='text-center w-32 mx-auto mt-4 py-2 rounded-md border border-black cursor-pointer active:scale-90 hover:bg-gradient-to-t from-[#06f917] to-green-600 hover:text-white duration-300 ' onClick={() => {
                quatityCheck(item.name, item.img, item.price, item.id)
                setAlert('Item Added To Cart', 'bg-green-500')
            }}>
                Add To Cart
            </div>
        </div>
    )
}

export default SliderCard
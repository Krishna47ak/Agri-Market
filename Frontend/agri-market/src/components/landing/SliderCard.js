import React from 'react'

const SliderCard = (props) => {
    return (
        <div className=' bg-gradient-to-t from-gray-400 to-white py-7 rounded-xl border border-gray-300 ' >
            <div>
                <img className='mx-auto mb-2 rounded-xl h-44 hover:scale-110 duration-700' src={props.item.img} alt='could not load' width={200} />
            </div>
            <div className='mt-5' >
                <p className='text-center text-[#130f40] text-2xl font-semibold my-1' >{props.item.name}</p>
            </div>
            <div>
                <p className='text-center text-black font-semibold text-lg my-1' >RS {props.item.price}/-</p>
            </div>
            <div className='text-center w-32 mx-auto mt-4 py-2 rounded-md border border-black hover:bg-[#06f917] hover:text-white duration-300 ' >
                <p>Add To Cart</p>
            </div>
        </div>
    )
}

export default SliderCard
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <Fragment>
            <div className='flex justify-center relative my-2'>
                <img className='md:h-[28rem] md:w-[100rem]' src={require('../../img/banner-bg.png')} />
                <div className='absolute text-white font-Poppins top-1/4 ' >
                    <p className='w-60 md:w-auto text-center md:text-[2rem] font-bold '>Fresh And Organic Products For You</p>
                    <p className='hidden md:block text-center w-96 mx-auto text-slate-300' >Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Aliquam Libero Nostrum Veniam Facere Tempore Nisi.</p>
                    <Link to="/"><p className='text-center mt-5 mx-16 md:mx-56 font-bold text-lime-300 bg-green-500 py-2 rounded-lg border border-red-600 scale-75 md:scale-100 hover:scale-105 hover:text-white duration-500 active:bg-green-600' >Shop Now</p></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner
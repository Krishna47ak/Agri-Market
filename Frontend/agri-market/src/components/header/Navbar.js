import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="bg-white flex px-20 py-6 items-center shadow-xl">
                <Link to="/" className="text-2xl font-bold font-Poppins flex items-center"> <i className="fas fa-shopping-basket text-orange-500 text-3xl mx-2"></i>Agri Market</Link>

                <nav className="space-x-6 mx-auto">
                    <Link className='font-medium text-gray-600 text-lg font-Poppins' to="#home">Home</Link>
                    <Link className='font-medium text-gray-600 text-lg font-Poppins' to="#features">Features</Link>
                    <Link className='font-medium text-gray-600 text-lg font-Poppins' to="#products">Products</Link>
                    <Link className='font-medium text-gray-600 text-lg font-Poppins' to="#categories">Categories</Link>
                    <Link className='font-medium text-gray-600 text-lg font-Poppins' to="#review">Review</Link>
                </nav>

                <div className="space-x-5">
                    <div className="fas fa-bars bg-slate-200 p-3 rounded-md" id="menu-btn"></div>
                    <div className="fas fa-search bg-slate-200 p-3 rounded-md" id="search-btn"></div>
                    <div className="fas fa-shopping-cart bg-slate-200 p-3 rounded-md" id="cart-btn"></div>
                    <div className="fas fa-user bg-slate-200 p-3 rounded-md" id="login-btn"></div>
                </div>
            </ header>
        </>
    )
}

export default Navbar
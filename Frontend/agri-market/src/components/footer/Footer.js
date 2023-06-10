import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex bg-[#130f40] h-68 px-20 py-10 ">
            <div className='w-72 space-y-1' >
                <p className=' text-2xl font-semibold text-white flex items-center' >Agri Market<img className='h-12 md:h-20 mx-3 pb-3 ' src={require('../../assets/img/harvest-solid.png')} alt='logo' /> </p>
                <p className='text-white pb-2' >We must make organic the conventional choice and not the exception available only to the rich and educated.</p>
                <div className="text-white text-2xl space-x-5">
                    <Link to="https://www.facebook.com" target='_blank'  className="fab fa-facebook-f hover:text-black"></Link>
                    <Link to="#" target='_blank' className="fab fa-twitter hover:text-black"></Link>
                    <Link to="#" target='_blank' className="fab fa-instagram hover:text-black"></Link>
                    <Link to="#" target='_blank' className="fab fa-linkedin hover:text-black"></Link>
                </div>
            </div>
            <div className="flex-row space-y-3 ml-auto">
                <p className='text-2xl font-semibold text-white mb-5 ml-2' >Contact info</p>
                <div>
                    <Link to="#" className="text-white"><i className="fas fa-phone text-green-400 mx-2"></i> +91-87236-11902 </Link>
                </div>
                <div>
                    <Link to="#" className="text-white"><i className="fas fa-phone text-green-400 mx-2"></i> +91-63998-14309 </Link>
                </div>
                <div>
                    <Link to="#" className="text-white"><i className="fas fa-envelope text-green-400 mx-2"></i> agrimart@gmail.com </Link>
                </div>
                <div>
                    <Link to="#" className="text-white"><i className="fas fa-map-marker-alt text-green-400 mx-2"></i> bangalore, india - 560103 </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import useProducts from '../hooks/useProducts';
import Banner from '../components/header/Banner';
import Products from '../components/landing/Products';
import Footer from '../components/footer/Footer';

const HomePage = () => {
    const [ products ] = useProducts()
    return (
        <>
            <Banner />
            <Products title="Fruits" data={products.fruits} />
            <Products title="Vegetables" data={products.vegetables} />
            <Products title="Grains" data={products.grains} />
            <Footer />
        </>
    )
}

export default HomePage
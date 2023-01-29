import React, { Fragment } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderCard from './SliderCard';
import PlantSpinner from '../spinner/PlantSpinner';

const Products = (props) => {
    const items = props.data

    if (!items) {
        return <PlantSpinner/>
    }

    const listItems = items.map((item) =>
        <SwiperSlide key={item.id} >
            <SliderCard item={item} />
        </SwiperSlide>
    );
    return (
        <Fragment>
            <div className='my-10 px-10' >
                    <p className='inline-block my-10 text-center text-3xl font-semibold font-Poppins bg-[#adff00] p-2 px-5 pr-10 rounded-br-full ' >{props.title}</p>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {listItems}
                </Swiper>
            </div>
        </Fragment>
    )
}

export default Products

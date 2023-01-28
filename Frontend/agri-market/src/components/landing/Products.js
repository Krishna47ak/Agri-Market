import React, { Fragment } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Products = (props) => {
    const items = props.data

    if (!items) {
        return null
    }

    const listItems = items.map((item) =>
        <SwiperSlide key={item.id} >
            <div className=' bg-gradient-to-t from-gray-400 to-white py-7 rounded-xl border border-gray-300 ' >
                <div>
                    <img className='mx-auto mb-2 rounded-xl h-44 hover:scale-110 duration-700' src={item.img} alt='could not load' width={200} />
                </div>
                <div className='mt-5' >
                    <p className='text-center text-[#130f40] text-2xl font-semibold my-1' >{item.name}</p>
                </div>
                <div>
                    <p className='text-center text-black font-semibold text-lg my-1' >RS {item.price}/-</p>
                </div>
                <div className='text-center w-32 mx-auto mt-4 py-2 rounded-md border border-black hover:bg-[#06f917] hover:text-white duration-300 ' >
                    <p>Add To Cart</p>
                </div>
            </div>
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
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {listItems}
                </Swiper>
            </div>
        </Fragment>
    )
}

export default Products

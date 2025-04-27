import React from 'react'
import './productCard.css'

const ProductCard = () => {
    return (

        <div className="prod_card relative flex flex-col gap-[12px] pb-[20px]  cursor-pointer  " >

            <img src="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg" alt="prod-img" className='h-[360px] object-cover ' />

            <div className="texts flex justify-between ">
                <h3 className='text-[20px]/[26px] uppercase ' >Product Name</h3>
                <h4 className='text-[20px]/[26px] text-[var(--primary-color)]  ' >&#8377;500</h4>
            </div>

            <button className=' add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer  ' >Add to Cart</button>

        </div>
    )
}

export default ProductCard
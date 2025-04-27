import React from 'react'

const NewYearSaleSec = () => {
    return (
        <div className=" relative min-h-[600px] bg-[#F6F6F6] w-full px-[100px] py-[50px] flex justify-between items-center " >
            <div className=" w-full text_cont flex flex-col justify-center items-start gap-[30px]  ">
                <div className="">
                    <h3 className='text-[20px]/[30px] font-light'  >10% off</h3>
                    <h2 className='text-[60px]/[70px] font-light'  >NEW YEAR <br /> SALE</h2>
                </div>
                <button className=' transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer  ' >SHOP SALE</button>
            </div>
            <img src="https://themewagon.github.io/MiniStore/images/single-image1.png" alt="" className='w-[500px] absolute right-0 bottom-0  ' />
        </div>
    )
}

export default NewYearSaleSec
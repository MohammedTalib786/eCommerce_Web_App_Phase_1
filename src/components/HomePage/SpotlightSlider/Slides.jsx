import React from 'react'

const Slides = ({ title, source }) => {
    return (
        <div className=" bg-[#F6F6F6] w-full px-[100px] py-[50px] flex justify-between items-center " >
            <div className=" w-full text_cont flex flex-col justify-center items-start gap-[22px]  ">
                <h2 className='text-[60px]/[70px] font-light' dangerouslySetInnerHTML={{ __html: title }} />
                <button className=' transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer  ' >SHOP NOW</button>
            </div>
            <img src={source} alt="" className='w-[500px]' />
        </div>
    )
}

export default Slides
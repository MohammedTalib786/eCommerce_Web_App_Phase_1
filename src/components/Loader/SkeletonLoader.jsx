import React from 'react'
import './skeleton_loader.css'

const Loader = () => {
    return (
        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px]  " >

                <span class="loader  " ></span>
                <span class="loader  " ></span>
                <span class="loader  " ></span>
                <span class="loader  " ></span>

            </div>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px] mt-[30px]  "  >

                <span class="loader  " ></span>
                <span class="loader  " ></span>
                <span class="loader  " ></span>
                <span class="loader  " ></span>

            </div>

        </>
    )
}

export default Loader
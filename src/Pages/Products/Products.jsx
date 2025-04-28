import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'



const Products = () => {
    let [prodData, setProdData] = useState([])
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;

    useEffect(() => {
        (async () => {
            let data = await fetch(productsAPI);
            let res = await data.json();
            console.log('res', res)
            setProdData(res)
        })()
    }, [])

    return (

        <>


            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <div className="py-[50px]">

                    <h1 className=" text-3xl font-bold text-center pb-5 ">Products</h1>

                    <div className="cont flex flex-wrap justify-center items-center gap-[20px] " >

                        {
                            prodData.map((elem) => {
                                return <ProductCard key={elem.id} boxWidth={"w-[23%]"} name={elem.name} price={elem.price.sale_price} featImg={elem.feat_img} />
                            })
                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export default Products
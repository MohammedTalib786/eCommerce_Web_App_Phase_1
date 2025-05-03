import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'
import Loader from '../../components/Loader/SkeletonLoader'



const Products = () => {
    let [loader, setLoader] = useState(true);
    let [prodData, setProdData] = useState([]);
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;

    useEffect(() => {
        (async () => {
            let data = await fetch(productsAPI);
            let res = await data.json();
            // console.log('res', res)
            setProdData(res)
        })()
    }, [])


    setTimeout(() => {
        setLoader(false)
        console.log('Loader Time complete!')
    }, 2000)

    return (

        <>

            <div className=" py-[50px] "  >


                {/* >>>>>>>>>>>>>> In Cont */}
                <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >


                    <h1 className=" text-3xl font-bold text-center pb-5 ">Products</h1>


                    <div className="cont flex w-full flex-wrap justify-center items-center gap-[20px] " >

                        {loader ? <Loader /> : prodData.map((elem) => <ProductCard
                            urlToProd={elem.slug}
                            key={elem.id}
                            boxWidth={"w-[23%]"}
                            name={elem.name}
                            price={elem.price.sale_price}
                            featImg={elem.feat_img}
                        />

                        )}

                        {/* <Loader /> */}

                        {/* {

                        prodData.map((elem) => {
                            return <ProductCard
                                urlToProd={elem.id}
                                key={elem.id}
                                boxWidth={"w-[23%]"}
                                name={elem.name}
                                price={elem.price.sale_price}
                                featImg={elem.feat_img}
                            />
                        })
                    } */}

                    </div>


                </div>
            </div>
        </>
    )
}

export default Products
import React from 'react'
import { useParams } from 'react-router-dom';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import useFetch from '../../hooks/useFetch';

const ProductDetail = () => {

    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdList = useFetch(`${productsAPI}/${params.slug}`);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    // console.log('useProdForDet Main hook in Detail Page', useProdList);

    return (

        <div className='py-[50px] ' >

            {
                loader ?
                    (<SpinnerLoader />)
                    : error ?
                        (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                        (
                            <div>
                                <h1 className='mx-auto text-center text-3xl  ' >This is the Product Detail Page</h1>
                                <h2 className='text-2xl' >Product Parameter {params.slug}</h2>
                                <img src={prodData.feat_img} alt="" />
                                <h3>{prodData.name}</h3>

                                <p className='text-decoration-line'  > Regular Price: Rs: {prodData.price?.reg_price} </p>
                                <p className=''  > Sale Price: Rs: {prodData.price?.sale_price} </p>
                            </div>
                        )
            }

        </div>

    )
}

export default ProductDetail;

import React from 'react'
import SpotlightSlider from '../../components/HomePage/SpotlightSlider/SpotlightSlider'
import '../../components/layout.css'
import NewYearSaleSec from '../../components/HomePage/NewYearSale/NewYearSaleSec'
import InformationComp from '../../components/HomePage/InformationComp/InformationComp'

import NewsLetter from '../../components/HomePage/NewsLetter/NewsLetter'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import BlogSlider from '../../components/BlogSlider/BlogSlider'
import Testimonials from '../../components/HomePage/Testimonials/Testimonials'
import InstaFeed from '../../components/HomePage/InstagramSec/InstaFeed'

const Home = () => {
    return (
        <>
            {/* >>>>>>>>>>>>>> Full Width Spotlight */}
            <SpotlightSlider />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* >>>>>>>>>>>>>> Information Comp */}
                <InformationComp />

                {/* >>>>>>>>>>>>>> Mobile Prod Slider */}
                <ProductSlider title="Mobile Products" urlText="GO TO SHOP" urlVal="/products" />

                {/* >>>>>>>>>>>>>> Watch Prod Slider */}
                <ProductSlider title="Watch Products" urlText="GO TO SHOP" urlVal="/products" />

            </div>

            {/* >>>>>>>>>>>>>> Full Width New Year Sale Sec */}
            <NewYearSaleSec />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <BlogSlider />
                <Testimonials />
            </div>

            {/* >>>>>>>>>>>>>> Full Width Newsletter */}
            <NewsLetter />


            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <InstaFeed />
            </div>

        </>
    )
}

export default Home
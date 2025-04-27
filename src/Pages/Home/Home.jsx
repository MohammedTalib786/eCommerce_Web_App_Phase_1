import React from 'react'
import SpotlightSlider from '../../components/HomePage/SpotlightSlider/SpotlightSlider'
import '../../components/layout.css'
import NewYearSaleSec from '../../components/HomePage/NewYearSale/NewYearSaleSec'
import InformationComp from '../../components/HomePage/InformationComp/InformationComp'
import ProductCard from '../../components/ProductCard/ProductCard'
import NewsLetter from '../../components/HomePage/NewsLetter/NewsLetter'

const Home = () => {
    return (
        <>
            {/* >>>>>>>>>>>>>> Spotlight */}
            <SpotlightSlider />

            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* >>>>>>>>>>>>>> Information Comp */}
                <InformationComp />

                {/* >>>>>>>>>>>>>> Slider */}
                <div className="flex gap-[30px] py-[50px]  ">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>

            <NewYearSaleSec />

            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                {/* >>>>>>>>>>>>>> Newsletter */}
                <NewsLetter />
            </div>


        </>
    )
}

export default Home
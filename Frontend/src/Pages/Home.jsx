import React from 'react'
import CategoryList from "../Components/CategoryList"
import BannerProduct from '../Components/BannerProduct'
import HorizontalCardproduct from '../Components/HorizontalCardproduct'
import VerticalCardProduct from '../Components/VerticalCardProduct'
const Home = () => {
  return (
    <>
      <div>
        <CategoryList />
        <BannerProduct />

        <HorizontalCardproduct category={"Mouse"} heading={"Popular Mice"} />
        <HorizontalCardproduct category={"watches"} heading={"Trending Watches"} />
        <HorizontalCardproduct category={"airpodes"} heading={"Best-Selling AirPods"} />
        <HorizontalCardproduct category={"camera"} heading={"Top Cameras"} />
        <HorizontalCardproduct category={"earphones"} heading={"Premium Earphones"} />
        <HorizontalCardproduct category={"printers"} heading={"Popular Printers"} />
        <HorizontalCardproduct category={"processor"} heading={"High-Performance Processors"} />
        <HorizontalCardproduct category={"speakers"} heading={"Best Speakers"} />
        <HorizontalCardproduct category={"televisions"} heading={"Top-Rated Televisions"} />
        <HorizontalCardproduct category={"trimmers"} heading={"Grooming Trimmers"} />
        <VerticalCardProduct category={"mobiles"} heading={"Latest Mobiles"} />
        <VerticalCardProduct category={"refrigerator"} heading={"Energy-Efficient Refrigerators"} />

      </div>
    </>
  )
}

export default Home
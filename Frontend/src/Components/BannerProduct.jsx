import React, { useEffect, useState } from 'react'
import image1 from "../assest/banner/img1.webp"
import image2 from "../assest/banner/img2.webp"
import image3 from "../assest/banner/img3.jpg"
import image4 from "../assest/banner/img4.jpg"
import image5 from "../assest/banner/img5.webp"

import image1Mobile1 from "../assest/banner/img1_mobile.jpg"
import image1Mobile2 from "../assest/banner/img2_mobile.webp"
import image1Mobile3 from "../assest/banner/img3_mobile.jpg"
import image1Mobile4 from "../assest/banner/img4_mobile.jpg"
import image1Mobile5 from "../assest/banner/img5_mobile.png"

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {

    const [currentImage, setCurentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]
    const mobileImage = [
        image1Mobile1,
        image1Mobile2,
        image1Mobile3,
        image1Mobile4,
        image1Mobile5
    ]

    const nextImage = () => {
        if (desktopImages.length -1 > currentImage) {
            setCurentImage(prev => prev + 1)
        }
    }
    const prevImage = () => {
        if (currentImage!=0) {
            setCurentImage(prev => prev - 1)
        }
    }



    useEffect(()=>{
        const interval=setInterval(()=>{
            if (desktopImages.length -1 > currentImage){
                nextImage();
            }else{
                setCurentImage(0);
            }

        },2000)
        return ()=>clearInterval(interval)
    },[currentImage])



    return (
        <div className='container mx-auto px-4 rounded '>
            <div className='h-60 md:h-72 w-full bg-slate-200 relative'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className=' flex justify-between w-full text-2xl'>
                        <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft /></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight /></button>
                    </div>
                </div>

                {/* desktop view */}
                <div className='hidden md:flex h-full w-full overflow-hidden '>
                    {
                        desktopImages.map((imageURL, index) => {
                            return (
                                <div className=' w-full h-full min-w-full min-h-full transition-all' key={imageURL}
                                    style={{ transform: `translatex(-${currentImage * 100}%)` }}
                                >
                                    <img src={imageURL} alt="" className='w-full h-full' />
                                </div>

                            )
                        })
                    }
                </div>
                {/* mobile view */}
                <div className='flex h-full w-full overflow-hidden md:hidden '>
                    {
                        mobileImage.map((imageURL, index) => {
                            return (
                                <div className=' w-full h-full min-w-full min-h-full transition-all' key={imageURL}
                                    style={{ transform: `translatex(-${currentImage * 100}%)` }}
                                >
                                    <img src={imageURL} alt="" className='w-full h-full object-cover' />
                                </div>

                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default BannerProduct
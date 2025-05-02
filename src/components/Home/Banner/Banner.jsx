import React from 'react'
import headphone from "../../../assets/black_headphones.png"
import star from "../../../assets/star.png"
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
    return (
        <div className='banner flex justify-center items-center'>
            <Carousel className=''>
                <Carousel.Item className='w-[100%]'>
                    <div className="banner_content w-[100%] flex justify-center items-center px-12">
                        <div className="caption">
                            <div className="top my-4 flex items-center gap-2 ">
                                <img className='w-5' src={star} alt="" />
                                <h3>Top products</h3>
                            </div>
                            <h3 className='text-black text-3xl font-bold'>First slide label</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur a facere earum perferendis modi! Quo maiores sunt, autem dolore error optio aliquid corporis labore.</p>
                            <div className="shop_button my-4 w-[25%] p-2 text-center text-white bg-blue-600 transition-all duration-200 hover:scale-110 hover:border hover:border-blue-600 hover:cursor-pointer">
                                Shop Now
                            </div>
                        </div>
                        <img className='banner_img' src={headphone} alt="" />
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item className='w-[98vw]'>
                    <div className="banner_content z-[-1] w-[100%] flex justify-center items-center px-12">
                        <div className="caption">
                            <div className="top my-4 flex items-center gap-2 ">
                                <img className='w-5' src={star} alt="" />
                                <h3>Top products</h3>
                            </div>
                            <h3 className='text-black text-3xl font-bold'>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <div className="shop_button my-4 w-[25%] p-2 text-center text-white bg-blue-600 transition-all duration-200 hover:scale-110 hover:border hover:border-blue-600 hover:cursor-pointer">
                                Shop Now
                            </div>
                        </div>
                        <img className='w-[45%]' src={headphone} alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item className='w-[98vw]'>
                    <div className="banner_content z-[-1] w-[100%] flex justify-center items-center px-12">
                        <div className="caption">
                            <div className="top my-4 flex items-center gap-2 ">
                                <img className='w-5' src={star} alt="" />
                                <h3>Top products</h3>
                            </div>
                            <h3 className='text-black text-3xl font-bold'>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <div className="shop_button my-4 w-[25%] p-2 text-center text-white bg-blue-600 transition-all duration-200 hover:scale-110 hover:border hover:border-blue-600 hover:cursor-pointer">
                                Shop Now
                            </div>
                        </div>
                        <img className='w-[45%]' src={headphone} alt="" />
                    </div>
                </Carousel.Item> */}
                
            </Carousel>
        </div>
    )
}


export default Banner

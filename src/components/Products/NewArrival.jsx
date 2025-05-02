import React from 'react'
import img from "../../assets/Mouse.png"
import iphone from "../../assets/iphones.png"
const NewArrival = () => {
    return (
        <div>
            <div className="NewArrival my-14">
                <div className="top mx-[75px] my-6 flex justify-center md:justify-between items-center">
                    <span className='text-3xl font-bold'>New Arrival</span>
                    <div className="category_button hidden md:block my-4 w-[25%] p-2 text-center">
                        View all Category 
                    </div>
                </div>
                <div className="container flex justify-around">
                    <div className="left p-20 flex flex-col justify-center items-center bg-light">
                        <div className="product">
                            <h1 className='text-3xl'>iphone 15 pro max</h1>
                            <div className="shop_button my-4 w-[25%] p-2 text-center text-white bg-blue-600 transition-all duration-200 hover:scale-110 hover:border hover:border-blue-600 hover:cursor-pointer">
                                Shop Now
                            </div>
                            <img className='New_Product' src={iphone} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="New_products flex flex-col gap-2">
                            <div className="product flex gap-3 p-2 border w-[100%] border-gray-400 rounded">
                                <div className="img bg-light w-[150px]">
                                    <img className='transition-all duration-200 hover:scale-110' src={img} alt="" />
                                </div>
                                <div className="info w-full flex flex-col justify-center">
                                    <div className="head text-md">Mouse</div>
                                    <div className="icons flex gap-1 text-[13px] ">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="product_price text-md">
                                        $40
                                    </div>
                                </div>
                            </div>
                            <div className="product flex gap-3 p-2 border w-[100%] border-gray-400 rounded">
                                <div className="img bg-light w-[150px]">
                                    <img className='transition-all duration-200 hover:scale-110' src={img} alt="" />
                                </div>
                                <div className="info w-full flex flex-col justify-center">
                                    <div className="head text-md">Mouse</div>
                                    <div className="icons text-[13px] ">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="product_price text-md">
                                        $40
                                    </div>
                                </div>
                            </div>
                            <div className="product flex gap-3 p-2 border w-[100%] border-gray-400 rounded">
                                <div className="img bg-light w-[150px]">
                                    <img className='transition-all duration-200 hover:scale-110' src={img} alt="" />
                                </div>
                                <div className="info w-full flex flex-col justify-center">
                                    <div className="head text-md">Mouse</div>
                                    <div className="icons text-[13px] ">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="product_price text-md">
                                        $40
                                    </div>
                                </div>
                            </div>
                            <div className="product flex gap-3 p-2 border w-[100%] border-gray-400 rounded">
                                <div className="img bg-light w-[150px]">
                                    <img className='transition-all duration-200 hover:scale-110' src={img} alt="" />
                                </div>
                                <div className="info w-full flex flex-col justify-center">
                                    <div className="head text-md">Mouse</div>
                                    <div className="icons text-[13px] ">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="product_price text-md">
                                        $40
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival

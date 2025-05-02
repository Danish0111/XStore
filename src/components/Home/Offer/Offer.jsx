import React from 'react'
import discount from "../../../assets/discount.png"
import buds from "../../../assets/buds.avif"
// import headphone from "../../assets/mid_headohone.png"
const Offer = () => {
    return (
        <div>
            <div className="offer flex justify-around mx-[6%] items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 my-8">
                <div className="content w-[50%]">
                    <div className="caption">
                        <div className="top my-4 flex items-center gap-2">
                            <img className='w-5' src={discount} alt="" />
                            <h3 className='text-red-500 shadow-sm'>Weekend Discount</h3>
                        </div>
                        <h3 className='text-3xl font-bold my-2'>Get 40% off on digital products</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam maiores vero sed recusandae dolorem aliquid maxime quibusdam sint nesciunt, corporis voluptates, necessitatibus eos eveniet.</p>
                        <div className="shop_button my-4 w-[50%] p-2 text-center text-white bg-blue-600 transition-all duration-200 hover:scale-110 hover:border hover:border-blue-600 hover:cursor-pointer">
                            Shop Now
                        </div>
                    </div>
                </div>
                <div className="img w-[40%]">
                    <img src={buds} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offer

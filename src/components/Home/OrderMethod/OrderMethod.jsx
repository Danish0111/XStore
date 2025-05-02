import React from 'react'
import secure from "../../../assets/secure.png"
import ship from "../../../assets/ship.png"
import support from "../../../assets/online-support.png"
const OrderMethod = () => {
  return (
    <div>
        <div className=" bg-gradient-to-r from-gray-300 via-gray-50 to-gray-200 py-24">
            <div className="cards flex justify-evenly">
                <div className="card flex flex-col justify-center items-center bg-white rounded">
                    <div className="img">
                        <img src={ship} alt="" />
                    </div>
                    <div className="caption text-center w-[100%]">
                        <h1 className='text-xl font-bold my-1'>Free Shipping</h1>
                        <p className='text-sm'>Our free shipping policy applies to all orders, regardless of order value or destination.</p>
                    </div>
                </div>
                <div className="card flex flex-col justify-center items-center bg-white rounded">
                    <div className="img">
                        <img src={secure} alt="" />
                    </div>
                    <div className="caption text-center w-[100%]">
                        <h1 className='text-xl font-bold my-1'>Secure payments</h1>
                        <p className='text-sm'>your payment is always safe, secure, and protectedat all times.</p>
                    </div>
                </div>
                <div className="card flex flex-col justify-center items-center bg-white rounded">
                    <div className="img">
                        <img src={support} alt="" />
                    </div>
                    <div className="caption text-center w-[100%]">
                        <h1 className='text-xl font-bold my-1'>Support Online 24/7</h1>
                        <p className='text-sm'>We are available 24/7 to assist you with any questions, or issues you may have.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderMethod

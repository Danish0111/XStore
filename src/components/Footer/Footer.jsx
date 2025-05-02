import React from 'react'
import { NavLink } from 'react-bootstrap'
const Footer = () => {
    return (
        <div>
            <div className="bottom flex justify-evenly my-20">
                <div className="web_info">
                    <div className="logo text-3xl font-bold my-2">
                        XStore
                    </div>
                    <div className="rights">&copy; XStore All Rights Reserved.</div>
                </div>
                <div className="know_us">
                    <h1 className='text-md font-bold my-4'>Get to Know Us</h1>
                    <ul className='flex flex-col gap-2'>
                        <li><NavLink href=''>About us</NavLink></li>
                        <li><NavLink href=''>How To shop</NavLink></li>
                        <li><NavLink href=''>Contact us</NavLink></li>
                    </ul>
                </div>
                <div className="returns">
                    <h1 className='text-md font-bold my-4'>Orders & Returns</h1>
                    <ul className='flex flex-col gap-2'>
                        <li><NavLink href=''>Shopping & Delivery</NavLink></li>
                        <li><NavLink href=''>Returns & Exchange</NavLink></li>
                        <li><NavLink href=''>Track Order</NavLink></li>
                    </ul>
                </div>
                <div className="know_us">
                    <h1 className='text-md font-bold my-4'>Contact</h1>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <img src="" alt="" />
                            <span>(702) 555-0122</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>XStore@example.com</span>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <span>2343-example address,12234</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

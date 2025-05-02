import React from 'react';
import search from "../../assets/search.png";
import hamburger from "../../assets/text.png";
import home from "../../assets/home.png";
import product from "../../assets/shopping-bag.png";
import about from "../../assets/about.png";
import contact from "../../assets/info.png";
import cart from "../../assets/shopping-cart.gif";
import { useState, useEffect, useContext } from 'react';
import { Contaxt } from '../../Utils/Contaxt';
import Cart from '../Cart/Cart';
import { Link } from "react-router-dom";
import Search from './Search/Search';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { cartCount } = useContext(Contaxt);
    const [searchBar, setSearchBar] = useState(false);

    const HandleScroll = () => {
        const offsets = window.scrollY;
        if (offsets > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
        return () => window.removeEventListener("scroll", HandleScroll);
    }, []);

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <div className={`flex navbar navbar-light bg-light w-full relative justify-between shadow-xl px-10 h-24 ${scrolled ? "sticky top-0 z-20" : ""}`}>
                <Link to="/" className='text-3xl font-bold'>
                    XStore
                </Link>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="Mobile_Nav_Content flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/" className='flex items-center gap-4 my-1'>
                                        <img className='w-12' src={home} alt="" />
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/products" className='flex items-center gap-4 my-1'>
                                        <img className='w-10' src={product} alt="" />
                                        <span>Products</span>
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/about" className='flex items-center gap-4 my-1'>
                                        <img className='w-10' src={about} alt="" />
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/contact" className='flex items-center gap-4 my-1'>
                                        <img className='w-10' src={contact} alt="" />
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden lg:flex justify-center items-center">
                        <li className="border-gray-400 uppercase">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="border-gray-400 uppercase">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="border-gray-400 uppercase">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="border-gray-400 uppercase">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <div className="hidden icons md:flex gap-4">
                            <div className="search" onClick={() => setSearchBar(true)}>
                                {console.log(searchBar)}
                                <img className='w-10' src={search} alt="" />
                                
                            </div>
                            <div className="cart flex items-center" onClick={() => setShowCart(true)}>
                                <img className='w-10 hover:cursor-pointer' src={cart} alt="" />
                                {!!cartCount && (
                                    <span className='cart-total bg-red-500 text-white rounded-full p-1 px-2 text-[10px]'>{cartCount}</span>
                                )}
                            </div>
                        </div>
                    </ul>
                </nav>
                <style>{`
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background: white;
                        z-index: 10;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                `}</style>
            </div>
            {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
            {searchBar && <Search searchBar={searchBar} setSearchBar={setSearchBar} />}
        </>
    )
}

export default Navbar;

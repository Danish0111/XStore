import React, { useContext } from 'react';
import { Contaxt } from "../../Utils/Contaxt";
import { Link } from 'react-router-dom';
import shopping from "../../assets/shopping.png"
import close from "../../assets/close.png"
// import { useEffect } from 'react';

const Cart = ({ showCart, setShowCart }) => {
    const { cartItems, handleRemoveFromCart, handleCartQuantity, cartSubTotal } = useContext(Contaxt);
    
    return (
        <>
            {showCart && (
                <div className="Shopping_cart fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowCart(false)}></div>

                    <div className="relative z-50 w-full max-w-md bg-white shadow-xl h-[100vh]">
                        <div className="flex items-start justify-between p-4 border-b border-gray-200 bg-white sticky top-0">
                            <div className="shopping ">
                                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                            </div>
                            <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                onClick={() => setShowCart(false)}
                            >
                                <span className="sr-only">Close panel</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col bg-white shadow-xl">

                            {!cartItems.length && (
                                <div className='empty_cart flex flex-col justify-center items-center gap-2'>
                                    <img className='w-[200px]' src={shopping} alt="" />
                                    <h2 className='text-xl font-bold'>Your Cart is empty</h2>
                                    <p className='text-gray-400'>Please add something to your cart</p>
                                </div>
                            )}
                            {cartItems.length && (
                                <div className="cart_items px-4 py-6 sm:px-6">
                                    <ul role="list" className="-my-6 divide-y  divide-gray-200">
                                        {cartItems.map((item) => (
                                            <li key={item.id} className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img src={"http://localhost:1337" + item?.attributes?.img?.data?.attributes?.url} alt={item.title} className="h-full w-full object-cover object-center" />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href="#">{item.attributes.title}</a>
                                                            </h3>
                                                            <p className="ml-4">${item.attributes.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="cart_btn my-9 w-full flex items-center justify-between">
                                                            <div className='quantity_btn flex items-center gap-2'>
                                                                <span className='px-2 py-1 hover:cursor-pointer' onClick={() => {
                                                                    handleCartQuantity(item, "dec");
                                                                }}>-</span>
                                                                <div className='px-2 py-1 hover:cursor-pointer border-[2px] border-gray-400'>{item.attributes.quantity}</div>
                                                                <span className='px-2 py-1 hover:cursor-pointer' onClick={() => {
                                                                    handleCartQuantity(item, "inc");
                                                                }}>+</span>
                                                            </div>
                                                            <div className="close">
                                                                <img className='w-6 hover:cursor-pointer' src={close} alt="" onClick={()=> handleRemoveFromCart(item)}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-white sticky bottom-0">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>${cartSubTotal}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm ${cartItems.length === 0 ? 'bg-indigo-300 cursor-not-allowed hover:bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                                    >
                                        Checkout
                                    </a>
                                </div>
                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    <p>
                                        or
                                        <Link to={"/products"}>
                                            <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" onClick={() => setShowCart(false)}>Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;

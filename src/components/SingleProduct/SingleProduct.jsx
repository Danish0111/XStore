import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import { useContext, useState } from 'react';
import { Contaxt } from '../../Utils/Contaxt';
import Related_Products from './Related_Products/Related_Products';

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data, loading, error } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    // Get handleAddToCart from context
    const { handleAddToCart } = useContext(Contaxt);

    const products = data?.data?.[0]?.attributes;

    const Increment = () => {
        setQuantity((prevState) => prevState + 1);
    };
    const Decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div className="bg-gray-100 py-8 mb-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                                <img className="w-[90%] h-full object-cover" src={"http://localhost:1337" + products?.img?.data?.attributes?.url} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={() => handleAddToCart(data?.data?.[0], quantity)}>Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{products.title}</h2>
                            <div className='my-5'>
                                <span className="font-bold text-gray-700">Product Description:</span>
                                <p className="text-gray-600 text-sm mt-2">
                                    {products.description}
                                </p>
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700">Price:</span>
                                    <span className="text-gray-600">{products.price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700">Availability:</span>
                                    <span className="text-gray-600">In Stock</span>
                                </div>
                            </div>

                            <div>
                                <div className="cart_btn my-9">
                                    <div className='quantity_btn flex items-center gap-2'>
                                        <span className='px-3 py-2 hover:cursor-pointer' onClick={Decrement}>-</span>
                                        <div className='px-3 py-2 hover:cursor-pointer border-[2px] border-gray-400'>{quantity}</div>
                                        <span className='px-3 py-2 hover:cursor-pointer' onClick={Increment}>+</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='font-bold'>Category : </span>
                                <span>{products?.categories?.data?.[0]?.attributes?.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Related_Products productId={id} categoryId={products?.categories?.data?.id} />

        </div>
    );
};

export default SingleProduct;

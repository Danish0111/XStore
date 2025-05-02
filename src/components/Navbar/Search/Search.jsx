import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import close from '../../../assets/close.png'

const Search = ({ setSearchBar }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    return (
        <>
            {setSearchBar && (
                <div className="search-overlay text-gray-600">
                    <div className="search-container">
                        <input
                            className="search-input"
                            type="search"
                            name="search"
                            placeholder="Search"
                            value={query}
                            onChange={handleChange}
                        />
                        <button type="submit" className="search-button">
                            <svg
                                className="search-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                xmlSpace="preserve"
                                width="512px"
                                height="512px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                        <div className="search_close relative bottom-[45px] left-[10px] hover:cursor-pointer z-50" onClick={() => setSearchBar(false)}>
                            <img className='w-6' src={close} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {query && data && (
                <div className="search-results">
                    {/* Render search results here */}
                    {data?.data?.map(item => (
                        <div key={item.id} >
                            <div onClick={() => {navigate('/product/' + item.id); setSearchBar(false)}} className='flex justify-between items-center w-full py-2 px-3 hover:bg-blue-100 hover:cursor-pointer'>
                                <div className="img">
                                    <img className='w-12 bg-gray-100' src={'http://localhost:1337' + item?.attributes?.img?.data?.attributes?.url} alt="img" />
                                </div>
                                <div className="name">
                                    {item.attributes.title}
                                </div>
                            </div>
                            <div className="line h-[0.1px] bg-gray-200">

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Search;

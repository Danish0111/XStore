import React from 'react';
import { useNavigate } from 'react-router-dom';
import headphone from "../../../assets/headphones.png";
import camera from "../../../assets/camera.png";
import laptop from "../../../assets/laptop.png";
import phone from "../../../assets/phone.png";
import watch from "../../../assets/watch.png";

const Category = ({ category }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="categories flex flex-col py-10 justify-center items-center">
                <h1 className="text-3xl font-bold py-5">Top Category</h1>
                <div className="category flex gap-12">
                    {category?.data?.map((item) => {
                        const imgUrl = item?.attributes?.img?.data?.attributes?.url;
                        return (
                            <div key={item.id} className="item flex flex-col justify-center items-center shadow-md transition-all duration-300 hover:scale-110"
                            onClick={()=>  navigate(`/category/${item.id}`)}
                            >
                                {imgUrl ? (
                                    <img src={`http://localhost:1337${imgUrl}`} alt={item?.attributes?.title} loading="lazy" />
                                ) : (
                                    <img src={headphone} alt="Placeholder" loading="lazy" />
                                )}
                                <div className="title">{item?.attributes?.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Category;

import React from 'react'
// import img from "../../../assets/Mouse.png"
import { useNavigate } from 'react-router-dom'

const Product = ({ id, data }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container w-fit">
                <div className="col w-fit" onClick={() => navigate("/product/" + id)}>
                    <div className="product">
                        <div className="p_img bg-light">
                            <img className='product_img transition-all duration-200 hover:scale-110' src={"http://localhost:1337" + data?.img?.data?.attributes?.url} alt="" />
                        </div>
                        <div className="info">
                            <div className="head">{data?.title}</div>
                            <div className="icons">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product_price">
                                ${data?.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

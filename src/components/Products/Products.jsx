import React from 'react'
import Product from './Product/Product'

const Products = ({ products }) => {
  return (
    <div>
      {/* <h1 className='text-3xl flex justify-center items-center md:justify-normal md:items-start font-bold m-10 mx-12'>Popular products</h1> */}
      <div className="container flex justify-center">
        <div className="row">
          <div className="products">
            {products?.data?.map((item) => {
              return (
                <Product key={item.id} id={item.id} data={item.attributes}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

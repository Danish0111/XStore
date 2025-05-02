import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Products from '../Products/Products'
import { useParams, NavLink } from 'react-router-dom'

const Category = () => {

  const { id } = useParams();
  const endpoint = `/api/products?populate=*&[filters][categories][id][$eq]=${id}`;

  const { data, loading, error } = useFetch(endpoint);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="category-title flex justify-start gap-2">
            <NavLink to={"/"} className='text-3xl flex items-center md:justify-normal md:items-start m-10 mr-0'>
              <h2>Home</h2>
            </NavLink>
            <span className='text-3xl flex justify-center gap-2 items-center md:justify-normal md:items-start font-bold m-10 ml-0'>
              <span>/</span>
              {
                data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title
              }
            </span>
          </div>
        </div>
        <Products products={data} />
      </div>
    </>
  )
}

export default Category

import React, { useContext } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Products/Products'
import NewArrival from '../Products/NewArrival'
import Offer from './Offer/Offer'
import OrderMethod from './OrderMethod/OrderMethod'
import { FetchDataFromApi } from '../../Utils/api'
import { useEffect } from 'react'
import { Contaxt } from '../../Utils/Contaxt'
const Home = () => {

  const { category, setCategory, products, setProducts } = useContext(Contaxt);
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);
  
  const getCategory = ()=> {
    FetchDataFromApi("/api/categories?populate=*").then((res) => {
      // console.log(res);
      setCategory(res);
    });
  };
  const getProducts = ()=> {
    FetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };
  return (
    <div>
      <Banner/>
      <Category category={category}/>
      <Products products={products}/>
      <NewArrival/>
      <Offer/>
      <OrderMethod/>
    </div>
  )
}

export default Home

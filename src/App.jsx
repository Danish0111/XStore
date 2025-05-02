import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Banner from './components/Home/Banner/Banner';
import NewsLetter from './components/Home/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AppContaxt from './Utils/Contaxt';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';
function App() {

  return (
    <>
      <BrowserRouter>
        <AppContaxt>
          <Navbar />
          {/* <Banner/> */}
          {/* <SingleProduct/> */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/category/:id' element={<Category />}></Route>
            <Route path='/product/:id' element={<SingleProduct />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
          <NewsLetter />
          <Footer />
        </AppContaxt>
      </BrowserRouter>
    </>
  )
}

export default App

import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Contaxt = createContext();

const AppContaxt = ({children}) =>{
    const [products, setProducts] = useState();
    const [category, setCategory] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [itemCount, setItemCount] = useState(0)
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    
    useEffect(() => {
        let count = 0;
        let subTotal = 0;

        cartItems.forEach((item) => {
            // count += item.attributes.quantity;
            count += 1;
            subTotal += item.attributes.price * item.attributes.quantity;
        });

        setCartCount(count);
        setCartSubTotal(subTotal);
    }, [cartItems]);


    // useEffect(() => {
    //     let cartCount = 0;
    //     cartItems.forEach(() => {
    //         cartCount += 1
    //     });
    //     setItemCount(cartCount);
    // }, [cartItems]);


    // useEffect(() => {
    //   let count = 0;
    //   cartItems.map((item)=> (count += item.attributes.quantity));
    //   setCartCount(count);

    //   let subTotal = 0;
    //   cartItems.map((item) => (subTotal += item.attributes.price * item.attributes.quantity));
    // }, [cartItems]);
    
    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((item) => item.id === product.id);
    
        if(index !== -1){
            items[index].attributes.quantity += quantity;
        }
        else{
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    }
    

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((item) => item.id !== product.id); // Fix here
        setCartItems(items);
    };
    

    const handleCartQuantity = (product, type) => {
        let items = [...cartItems];
        let index = items.findIndex((item) => item.id === product.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        }
        else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return; 
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    }
    return (
        <Contaxt.Provider
            value={{
                category,
                setCategory,
                products,
                setProducts,
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartQuantity,
                itemCount,
                setItemCount,
            }}
        >
            {children}
        </Contaxt.Provider>
    );

};

export default AppContaxt;
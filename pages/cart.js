import Hero from "@/components/Hero";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import Item from "@/components/Item";


const Cart = () => {
    
    
    const {cart} = useSelector(state => state.cart);
    const {item} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("printing cart")
        console.log(cart);
    }, [cart, item]);

    console.log("printing items")
    console.log(item);
    let motto = '';


    if (cart == 0){
        motto = 'Your cart is empty'
    }else{
        motto = 'Here are all your items.'
    }

    return (  
        <>

            <Hero

                title="Cart"
                motto = {motto}
                picture= "/finalCart.png"
            />
            
            <div className="pizzaGrid">
               {item.map(item=>{
                return(
                    <Item
                    key={item.title}
                    picture={item.picture}
                    title={item.title}
                    description={item.description}
                    price={item.price}

                    />
                )
               })}

               <h2>{cart == 0 && <h1>Uh Oh! Nothing in here!</h1>}</h2>
            </div>

        </>
    );
}
 
export default Cart;
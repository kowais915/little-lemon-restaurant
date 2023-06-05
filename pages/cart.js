import Hero from "@/components/Hero";
import { useSelector } from 'react-redux';

const Cart = () => {
    const {cart} = useSelector(state => state.cart);
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
            
        </>
    );
}
 
export default Cart;
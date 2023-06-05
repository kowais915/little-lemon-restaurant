import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from 'react';

const Layout = ({children}) => {
    const [cart, setCart ] = useState(1)



    return ( 
        <>
            <Navbar
            cart={cart}
            setCart = {setCart}
            
            />
           
            {children}

            <Footer />
        
        </>
     );
}
 
export default Layout;
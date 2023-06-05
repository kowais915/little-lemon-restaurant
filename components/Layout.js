import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from 'react';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
    const {bodyColor, navColor, textColor} = useSelector(state => state.toggle);
    



    return ( 
        <>
            <Navbar
                style={{backgroundColor: `${bodyColor}`}}
            
            />
           
            {children}

            <Footer />
        
        </>
     );
}
 
export default Layout;
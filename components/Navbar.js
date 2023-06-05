import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import {useState} from 'react';
import {BsCartDash} from 'react-icons/bs'
import { useSelector } from 'react-redux';


const Navbar = () => {

const {cart} = useSelector(state => state.cart);



    return (  
        <nav className={styles.container}>
            <div className={styles.brand} >
                <h1>
                    <Link className = {styles.navlink} href="/">Little Lemon</Link>
                </h1>
            </div>

            <div className={styles.links}>


                <Link href="/" className={styles.navlink}>Home</Link>
                <Link href="/about" className={styles.navlink}>About</Link>
                <Link href="/pizza" className={styles.navlink}>Pizza</Link>
                <Link href="/burgers" className={styles.navlink}>Burgers</Link>
                <Link href="/salad" className={styles.navlink}>Salad</Link>
                <Link href="/contact" className={styles.navlink}>Contact</Link>
                <Link href="/cart" onClick={()=>{increaseCart }}>
                        <BsCartDash className={styles.icon}/>
                </Link> 


               <div className={styles.counter}>

                {
                    cart > 0 ? <p>{cart}</p> : null
                }

               </div>
               
                
                
            </div>
        </nav>
    );
}
 
export default Navbar;
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import {useState} from 'react';
import {BsCartDash} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {empty} from '../cartRed';


const Navbar = () => {

const {cart} = useSelector(state => state.cart);
const dispatch = useDispatch();




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
                <button onClick={()=>{
                    dispatch(empty())

                }}>Empty Cart</button>
                <Link href="/cart">
                        <BsCartDash className={styles.icon}/>
                </Link> 


               {cart > 0 && <div className={styles.counter}>

                {
                    cart > 0 ? <p>{cart}</p> : null
                }

               </div>}

               
               
                
                
            </div>
            
        </nav>
    );
}
 
export default Navbar;
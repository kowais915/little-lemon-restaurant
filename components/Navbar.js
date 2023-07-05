import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import {useState} from 'react';
import {BsCartDash} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {empty} from '../cartRed';
import {toggle } from '../themeRed';
import Item from '@/styles/Item.module.css'
import {useEffect } from 'react';
import { itemsInCart } from '../cartRed';
import { useRouter } from 'next/router';
import {ThemeContext } from '../context/themeContext';
import {useContext } from 'react';


const Navbar = () => {
const {changeColor, color } = useContext(ThemeContext);

const [emptyIt, setEmptyIt ] = useState(false);
const {cart} = useSelector(state => state.cart);
const {item } = useSelector(state => state.cart);
const {theme} = useSelector(state => state.toggle);
const dispatch = useDispatch();
const router = useRouter();





    return (  
        <nav className={styles.container} style={{background:color }} onClick={()=>{
            return(
                changeColor('black')
            )
        }}>
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
                <Link href="/book" className={styles.navlink}>Book</Link>
                <button onClick={()=>{
                   
                    dispatch(empty())
                    router.reload('/cart')
                  

                }}>Empty Cart</button>

                <button onClick={()=>{
                    dispatch(toggle())

                }}>dark</button>
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
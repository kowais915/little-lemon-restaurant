import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import {BsCartDash} from 'react-icons/bs'

const Navbar = () => {

    const [cart, setCart] = useState(1)
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
               <Link href="/cart">

              <BsCartDash className={styles.icon}/>
                </Link> 
               
               {cart > 0 && <div className={styles.counter}>
                <p>{cart}</p>
               </div>}
                
            </div>
        </nav>
    );
}
 
export default Navbar;
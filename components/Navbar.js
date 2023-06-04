import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import {BsCartDash} from 'react-icons/bs'

const Navbar = () => {
    return (  
        <nav className={styles.container}>
            <div className={styles.brand}>
                <h1>
                    Little Lemon
                </h1>
            </div>

            <div className={styles.links}>

                <Link href="/" className={styles.navlink}>Home</Link>
                <Link href="/about" className={styles.navlink}>About</Link>
                <Link href="/book" className={styles.navlink}>Book</Link>
                <Link href="/contact" className={styles.navlink}>Contact</Link>
                
               <Link href="/cart">
              <BsCartDash className={styles.icon}/>
                </Link> 
               
                
            </div>
        </nav>
    );
}
 
export default Navbar;
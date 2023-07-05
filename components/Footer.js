import styles from '@/styles/Footer.module.css'
import {useContext } from 'react';
import {ThemeContext } from '../context/themeContext';

const Footer = () => {
    const {color, changeColor} = useContext(ThemeContext);
    return (  
        <footer className={styles.footer} style={{background: color}}>

            

           <div className={styles.copyright}>
               
                <p> © Little Lemon Inc. All Right Reserved 2023.  </p>

           </div>


        </footer>
    );
}
 
export default Footer;
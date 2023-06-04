import styles from '@/styles/Hero.module.css'
import Image from 'next/image' 

const Hero = ({title, motto, picture}) => {
    console.log(title)
    return ( 
        <div className={styles.hero}>

           <div className="left">
                <h1 className={styles.title}>{title}</h1>
              
                <p>{motto}</p>

           </div>

           <div className={styles.right}>
                <Image
                    src={picture}
                    width={300}
                    height={300}
                    
                />
           </div>

        </div>
     );
}
 
export default Hero;
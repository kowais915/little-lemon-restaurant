import styles from '@/styles/Hero.module.css'

const Hero = ({title, motto}) => {
    console.log(title)
    return ( 
        <div className={styles.hero}>

           <div className="left">
                <h1 className={styles.title}>{title}</h1>
              
                <p>{motto}</p>

           </div>

           <div className="right">
       
           </div>

        </div>
     );
}
 
export default Hero;
import styles from '@/styles/Featured.module.css'

const Featured = ({picture}) => {
    return ( 
    
    
    <div className={styles.featured} style={{background: `url(${picture})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            
    </div>

     );
}
 
export default Featured;
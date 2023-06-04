import styles from '@/styles/Secondary.module.css'

const FeaturedSecondary = ({picture}) => {
    return ( 
        <div className={styles.secondary} style={{background: `url(${picture})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

        </div>
     );
}
 
export default FeaturedSecondary;
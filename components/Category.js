import styles from '@/styles/Category.module.css'

const Category = ({picture, title}) => {
    return (  
        <div className={styles.parent}>
        <div className={styles.container} style={{background: `url(${picture})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            
        </div>
        
       
        <h3 className={styles.title}>{title}</h3>

        </div>

    );
}
 
export default Category;


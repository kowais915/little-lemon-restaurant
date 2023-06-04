import styles from '@/styles/Category.module.css'
import Link from 'next/link'

const Category = ({picture, links, title}) => {
    return (  
        <div className={styles.parent}>

          <Link href={links}>
          <div className={styles.container} style={{background: `url(${picture})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                
          </div>
                
            
                <h3 className={styles.title}>{title}</h3>
          </Link>

        </div>

    );
}
 
export default Category;


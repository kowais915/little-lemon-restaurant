import styles from '@/styles/Item.module.css'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {increment} from '../cartRed'

const Item = ({picture, title, description, price, inc}) => {
    const dispatch = useDispatch();

    return ( 

        
            <div className={styles.container} >
                    <Image className={styles.image} src={picture} width={300} height={300} />
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.desc}>{description}</p>
                    <h3 className={styles.price}>Price: ${price}</h3>
                    <div className={styles.button}>
                        <button 
                                onClick={()=> {
                                        dispatch(increment())
                                    }}
                        >Add to Cart</button>
                    </div>
            </div>
        
     );
}
 
export default Item;
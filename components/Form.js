import styles from '@/styles/Form.module.css'
import {useRouter } from 'next/router'
import { useEffect } from 'react'


const Form = () => {
    const router = useRouter()


   


    return ( 

    <div className={styles.form}>
            <form action="" className={styles.container} onSubmit={(e)=>{
               e.preventDefault();

               setTimeout(() => {
                
               }, 2000);
               
               router.push('/thankyou')
            }}>
           <div className={styles.name}>
                <label>
                    <span>Name</span>
                    <div>
                        <input className = {styles.input} type="text" placeholder="Name"/>
                    </div>
                  
                    
                    </label>
            </div>

           <div className="phone">
            
                <label>
                    <span>Phone</span>
                    <div>
                        <input className={styles.input}  type="text" placeholder="Phone"/>
                    </div>
                </label>

           </div>

            <div className="people">
                <label>
                    <span>No. of People</span>
                    <div>
                        <input className= {styles.input} type="text" placeholder="No. of People"/>
                    </div>
                </label>
            </div>

           <div className="msg">

                <label>
                    <span>Message to the Chef!</span>
                    <div>
                        <textarea  className={styles.textArea} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </label>

           </div>

           <div className={styles.btnContainer}>
                <button className={styles.btn} >Submit</button>
           </div>
        </form>
    </div>
     );
}
 
export default Form;
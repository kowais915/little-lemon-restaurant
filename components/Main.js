import Item from "@/components/Item";
import styles from "@/styles/Main.module.css";
import Category from "@/components/Category";

const Main = () => {
    return ( 

      
            <div className={styles.container}>

                <h1>Categories</h1>

                    <div className={styles.grid}>

                        <Category
                        
                        picture="/burger.png"
                        title="Burgers"

                        />


                        <Category
                        
                        picture="/salads.png"
                        title="Salads"

                        />


                        <Category
                        
                        picture="/pizzaa.png"
                        title="Pizzas"

                        />

                    </div>


            

            </div>
       
     );
}
 
export default Main;
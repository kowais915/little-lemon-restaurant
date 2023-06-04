import Item from "@/components/Item";
import styles from "@/styles/Main.module.css";
import Category from "@/components/Category";
import Featured from "./Featured";
import FeaturedSecondary from "./FeaturedSecondary";

const Main = () => {
    return ( 

      
            <div className={styles.container}>

                <h1 className={styles.title}>Categories</h1>

                    <div className={styles.grid}>

                        <Category
                        
                        picture="/burger.png"
                        title="Burgers"
                        links="/burgers"

                        />


                        <Category
                        
                        picture="/salads.png"
                        title="Salads"
                        links="/salad"

                        />


                        <Category
                        
                        picture="/pizzaa.png"
                        title="Pizzas"
                        links="/pizza"

                        />

                    </div>
                    <h1 className={styles.title}>Popular</h1>


                    <div className={styles.popular}>

                        <Featured
                            picture="/pizza.jpeg"
                        />

                        <div className={styles.secondary}>
                            <FeaturedSecondary
                                picture="/mix.png"
                            />

                            <FeaturedSecondary
                                picture="/burger.png"
                            />
                        </div>

                    </div>


            

            </div>
       
     );
}
 
export default Main;
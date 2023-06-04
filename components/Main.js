import Item from "@/components/Item";
import styles from "@/styles/Main.module.css";

const Main = () => {
    return ( 

        <>
            <div className={styles.container}>

                

                    <div className={styles.grid}>

                            <Item />

                            <Item />

                    </div>


            

            </div>
        </>
     );
}
 
export default Main;
import Hero from "@/components/Hero";
import Item from "@/components/Item";

const Burger = () => {

   
    const burgers = [
        {name: "Cheeseburger", price: 10, description: "The best cheeseburger in town", picture: "/burger.png"},
        {name: "Veggie Burger", price: 10, description: "The best veggie burger in town", picture: "/burger.png"},
        {name: "Chicken Burger", price: 10, description: "The best chicken burger in town", picture: "/burger.png"},
        {name: "BBQ Burger", price: 10, description: "The best bbq burger in town", picture: "/burger.png"},
        {name: "Buffalo Burger", price: 10, description: "The best buffalo burger in town", picture: "/burger.png"},
        {name: "Mushroom Burger", price: 10, description: "The best mushroom burger in town", picture: "/burger.png"},
        {name: "Double Burger", price: 10, description: "The best double burger in town", picture: "/burger.png"},
        {name: "Triple Burger", price: 10, description: "The best triple burger in town", picture: "/burger.png"},

    ]

   
    return ( 
        <>

            <Hero
                title="Burgers"
                motto="High quality, hand made, organic burgers"
                picture="/burger.png"
            />

            <div className="pizzaGrid">

                {burgers.map((burger) => {
                        return(
                            <Item
                                key={burger.name}
                                name={burger.name}
                                price={burger.price}
                                description={burger.description}
                                picture={burger.picture}
                               
                            

                            />
                        )
                    })
                }

            </div>
        
        </>
     );
}
 
export default Burger;
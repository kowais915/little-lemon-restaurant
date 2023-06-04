import Hero from "@/components/Hero";
import Item from "@/components/Item";

const Salad = () => {

   const salad = [
         {name: "Caesar", price: 10, description: "The best caesar salad in town", picture: "/salads.png"},
         {name: "Greek", price: 10, description: "The best greek salad in town", picture: "/salads.png"},
         {name: "Cobb", price: 10, description: "The best cobb salad in town", picture: "/salads.png"},
         {name: "Waldorf", price: 10, description: "The best waldorf salad in town", picture: "/salads.png"},
         {name: "Pork", price: 10, description: "The best pork salad in town", picture: "/salads.png"},
         {name: "Beef", price: 10, description: "The best beef salad in town", picture: "/salads.png"},
         {name: "Chicken", price: 10, description: "The best chicken salad in town", picture: "/salads.png"},
         {name: "Tuna", price: 10, description: "The best tuna salad in town", picture: "/salads.png"},
   ]
    return ( 
        <>
           <Hero
                title="Salad"
                motto="The best salad in town"
                picture="/salads.png"
           />

           <div className="pizzaGrid">

               {salad.map((salad) => {
                  return(
                     <Item
                        key={salad.name}
                        name={salad.name}
                        price={salad.price}
                        description={salad.description}
                        picture={salad.picture}
                        

                     />
                  )
               })}
           </div>
        
        </>
     );
}
 
export default Salad;
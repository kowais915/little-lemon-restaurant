import Hero from "@/components/Hero";
import Item from "@/components/Item";
import {useDispatch } from 'react-redux';

const Pizza = ({cart, setCart}) => {

    
    const pizzas = [
        {name: "Pepperoni", price: 10, description: "The best pepperoni pizza in town", picture: "/pizza.jpeg"},
        {name: "Hawaiian", price: 10, description: "The best hawaiian pizza in town", picture: "/pizza.jpeg"},
        {name: "Cheese", price: 10, description: "The best cheese pizza in town", picture: "/pizza.jpeg"},
        {name: "Meat", price: 10, description: "The best meat pizza in town", picture: "/pizza.jpeg"},
        {name: "Veggie", price: 10, description: "The best veggie pizza in town", picture: "/pizza.jpeg"},
        {name: "Supreme", price: 10, description: "The best supreme pizza in town", picture: "/pizza.jpeg"},
        {name: "BBQ", price: 10, description: "The best bbq pizza in town", picture: "/pizza.jpeg"},
        {name: "Buffalo", price: 10, description: "The best buffalo pizza in town", picture: "/pizza.jpeg"},
    ]



    return ( 
        <>  

            <Hero
                title="Pizza"
                motto="The best pizza in town"
                picture="/pizzaa.png"
            />
            
           

         

              <div className="pizzaGrid">

              
                   
              {pizzas.map((piz) => {
               
               return(


                   <Item
                   key={piz.name}
                   picture={piz.picture}
                   title={piz.name}
                   description={piz.description}
                   price={piz.price}
               />
               )
             })}
              </div>
          
        
        </>
        
     );
}
 
export default Pizza;
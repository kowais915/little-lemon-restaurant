import Hero from "@/components/Hero";

const Thankyou = () => {
    return ( 
        <div className="thankyou">

            <Hero
            title="Thank you!"
            motto="Your order has been placed!"
            picture="/burger.png"

            />
           
        </div>
     );
}
 
export default Thankyou;
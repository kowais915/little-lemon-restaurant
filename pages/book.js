import Form from "@/components/Form";
import Hero from "@/components/Hero";

const Book = () => {
    return ( 

        <>
            <Hero
                title="Book"
                motto="Please fill out the form below to book a table."
                picture= "/pizzaa.png"
            />
            
            <div className="form">
                    <Form/>
            </div>
        </>
     );
}
 
export default Book;
import "../../src/index.css";
import Button from "./Button";
import { useState } from "react";
import Contact from "./Contact";

function More() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
       }

    return(        
        <div>
            <Button onClick={toggleForm} />  
                     
            { showForm ? <Contact className="form-visible" /> : <Contact className="form-hidden" />  }            
        </div>
    )
    }

export default More;

//doesn't work. ???

 

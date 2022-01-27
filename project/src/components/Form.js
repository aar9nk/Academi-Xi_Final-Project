import "../../src/index.css";
import Button from "./Button";
import { useState } from "react";

function Form() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return(        
        <div>
            <h1 className={showForm ? "form-visible" : "form-hidden"}>Hello</h1> 
            <Button onClick={toggleForm}/>           
        </div>
    )
}

export default Form;



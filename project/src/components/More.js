import "../../src/index.css";
import Button from "./Button";
import { useState } from "react";

function More() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }
    console.log(showForm);

    return(        
        <div>
            <h1 className={showForm ? "form-visible" : "form-hidden"}>Hello</h1> 
            <Button onClick={toggleForm}/>           
        </div>
    )
}

export default More;

//doesn't work. ???


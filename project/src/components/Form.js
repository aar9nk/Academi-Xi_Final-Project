import "../../src/index.css";
import Button from "./Button";
import { useState } from "react";

function Form() {
    const [showForm, setShowForm] = useState(false);

    return(
        <>
        <Button onClick={!setShowForm} />
        {console.log(showForm)}
        <div className={ showForm ? "form-visible" : "form-hidden" }>
            <h1>HI</h1>
            {/* <form>
                <input type="text">Hello</input>
            </form> */}
        </div>
        </>
    )
}

export default Form;

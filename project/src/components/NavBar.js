import "../../src/index.css";
import { useState } from "react";
import Contact from "./Contact";
import More from "./More";
import Button from "./Button";

function NavBar() {
    // const [showForm, setShowForm] = useState(false);

    // const toggleClass = () => {
    //     setShowForm(!showForm);
    // }
    
    return(
        <div className="navbar">
            <h2>&#x27A2; Mitch</h2>
            <h2>&#x260E; 0400 000 000</h2>
            <h2>&#x2709; mitch@fake.com</h2>
            <More />
        </div>
    )
}


export default NavBar;


// <Button onClick={toggleClass} />
// <Form className={showForm ? "form-visible" : "form-hidden"} />




// { showForm ? <Form className="form-hidden" /> : <More className="form-visible" /> }

// {<More />

// <h2 className="hamburger-button" onClick={setShowForm}>&#8801;</h2>
// {
//     showForm ? <Form className="off"/> : <Form className="on" />
// } 
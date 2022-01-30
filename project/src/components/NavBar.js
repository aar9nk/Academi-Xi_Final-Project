import "../../src/index.css";
import { useState } from "react";
import Contact from "./Contact";
import Button from "./Button";

function NavBar({ contactOpen }) {    
    return(
        <div className="navbar">
            <h2>&#x27A2; Mitch</h2>
            <h2>&#x260E; 0400 000 000</h2>
            <h2>&#x2709; mitch@fake.com</h2>
            <Button onClick={contactOpen}/>
        </div>
    )
}


export default NavBar;
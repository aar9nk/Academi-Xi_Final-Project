import "../../src/index.css";
import { useState } from "react";
import Contact from "./Contact";
import Button from "./Button";

function NavBar() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="navbar">
      {contactOpen ? (
        <Contact />
      ) : (
        <div>
          <h2>&#x27A2; Mitch</h2>
          <h2>&#x260E; 0400 000 000</h2>
          <h2>&#x2709; mitch@fake.com</h2>
        </div>
      )}
      <Button onClick={() => setContactOpen(!contactOpen)} />
    </div>
  );
}

export default NavBar;

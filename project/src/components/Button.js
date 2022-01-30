import "../../src/index.css";

function Button({onClick}) {
    return(
        <button onClick={onClick} className="hamburger-button">&#8801;</button>
    )
}

export default Button;
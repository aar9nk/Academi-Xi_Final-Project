import "../../src/index.css";

function Contact() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Submitted. This is a Front-End Project and nothing will happen from here. Thanks for viewing.");
    }

    return(
        <div className="contact-form"> 
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <input
                type="text"
                placeholder="Full Name"
                required
                />
                <p>Email:</p>
                <input 
                type="email"
                placeholder="Email"
                required
                />
                <p>Message:</p>
                <input 
                type="text"
                placeholder="Message"
                required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
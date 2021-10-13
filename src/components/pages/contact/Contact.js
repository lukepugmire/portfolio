import Form from "./Form";

export default function Contact() {
    return <div className="contact_container">
        <div className="form_background"></div>
          <div className="form_container">
            <h2>Send me a Message</h2>
            <div className="contact_info">
                <div className="location">
                <h3>Location</h3>
                    <p>Country&#58; Norway</p>
                    <p>City&#58; Sandnes</p>
                </div>
                <div className="info">
                <h3>Contact Details</h3>
                    <p>Email&#58; Lukepugmire86@gmail.com</p>
                </div>
            </div>
            <Form />
        </div>  
        
        
    </div>

}

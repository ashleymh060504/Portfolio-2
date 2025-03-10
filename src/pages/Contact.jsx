import "../styles/index.css";
import ContactForm from "../components/ContactForm";

function Contact () {
  return (
    <div className="background-image">
      <h3>Contact Me</h3>
      <ContactForm />
      <h3>Feel free to instead email me at:<br></br>
      <a style={{ color: '#bc9a93'}} href="mailto:ashleymh060504@gmail.com">ashleymh060504@gmail.com</a>
      </h3>
    </div>
    );
}

export default Contact;
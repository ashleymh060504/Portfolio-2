import "../styles/About.css";
import ContactForm from "../components/ContactForm";

function Contact () {
  return (
    <div className="about-background-image">
      <h3>Contact Me</h3>
      <ContactForm />
      <h3>Feel free to email me instead at:<br></br>
      <a style={{ color: '#bc9a93'}} href="mailto:ashleymh060504@gmail.com">ashleymh060504@gmail.com</a>
      </h3>
    </div>
    );
}

export default Contact;
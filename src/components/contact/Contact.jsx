import { useRef } from "react"
import emailjs from '@emailjs/browser';


import "./contact.scss"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      };

  return (
    <div className="contact">
        <p className="contact_description">Un commentaire, une suggestion, une question, n'hésitez pas à nous contacter :{")"}</p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact
import React from 'react'
import './Contact.css'

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        alert(`Nom : ${name}\nEmail : ${email}\nMessage : ${message}`);
      };
    
      return (
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nom :</label><br />
          <input type="text" id="name" name="name" /><br />
          <label htmlFor="email">Email :</label><br />
          <input type="email" id="email" name="email" /><br />
          <label htmlFor="message">Message :</label><br />
          <textarea id="message" name="message"></textarea><br />
          <input type="submit" value="Envoyer" />
        </form>
      );
}

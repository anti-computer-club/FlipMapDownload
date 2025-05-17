import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ww6ba1z',
        'template_g7el7bm',
        form.current,
        'wWhQpdsxzidf7z7YT'
      )
      .then(
        () => {
          alert('Message sent!');
        },
        (error) => {
          alert('Failed to send message. Try again.');
          console.error(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <fieldset className="fieldset">
        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" required />

        <label className="label">How can we help?</label>
        <textarea name="message" className="textarea" placeholder="Message" required></textarea>

        <button type="submit" className="btn btn-neutral mt-4">Send</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
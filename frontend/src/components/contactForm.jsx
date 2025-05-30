import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Input, Button, TextArea } from 'pixel-retroui';

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
    <Card shadowColor="#9437ff" className="flex flex-col items-center w-full p-2">
      <form ref={form} onSubmit={sendEmail}>
        <fieldset className="fieldset">
          <label className="label ">Email</label>
          <Input name="email" type="email" className="input" placeholder="Email" required />

          <label className="label ">How can we help?</label>
          <TextArea name="message" className="textarea mb-4" placeholder="Message" required></TextArea>

          <Button type="submit" className=''>Send</Button>
        </fieldset>
      </form>
    </Card>
  );
}

export default ContactForm;
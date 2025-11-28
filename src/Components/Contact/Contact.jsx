import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hshark331@gmail.com</h5>
          </article>
        </div>
        <form ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            id="name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

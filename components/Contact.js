
"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

     emailjs
      .sendForm(
        "service_wzouh0l",
        "template_6z8k0qy",
        form.current,
        "M_yDwwkCRV22mncNn"
      )


      .then(() => {

        alert("Message Sent!");

        form.current.reset();

      })

     .catch((error) => {

  console.log("EMAIL ERROR:", error);

  alert(error.text || "Error sending message");

});

  };

  return (

    <section
      id="contact"
      className="py-28 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden"
    >

      <div className="glow top-0 right-0"></div>

      <div className="max-w-7xl mx-auto">

        <p className="text-[#00ff87] uppercase tracking-[4px] text-sm mb-4">
          04 — Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          GET IN TOUCH
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6 max-w-3xl"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-[#111] border border-[#222] px-6 py-5 outline-none focus:border-[#00ff87]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-[#111] border border-[#222] px-6 py-5 outline-none focus:border-[#00ff87]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="bg-[#111] border border-[#222] px-6 py-5 outline-none focus:border-[#00ff87]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#00ff87] text-black py-5 font-bold hover:scale-[1.02] transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}
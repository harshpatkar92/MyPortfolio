"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_wzouh0l",
        "template_6z8k0qy",
        form.current,
        "M_yDwwkCRV22mncNn"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.log("EMAIL ERROR:", error);
        alert(error?.text || "Error sending message");
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] py-24 sm:py-28 px-5 sm:px-6 md:px-16"
    >
      {/* Background Glow */}
      <div className="glow top-0 right-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 sm:w-12 h-[1px] bg-[#00ff87]" />

          <p className="text-[#00ff87] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
            04 — Contact
          </p>
        </div>

        {/* Heading */}
        <h2 className="max-w-5xl text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
          LET&apos;S BUILD
          <br />
          SOMETHING{" "}
          <span className="text-[#00ff87]">GREAT</span>
          <br />
          TOGETHER.
        </h2>

        {/* Intro */}
        <p className="mt-7 text-gray-400 text-base sm:text-lg leading-7 max-w-2xl">
          Have an idea, a project, or an opportunity? I&apos;d love to hear
          from you. Let&apos;s connect and build something meaningful.
        </p>

        {/* Contact Information */}
        <div className="mt-12 sm:mt-14 grid md:grid-cols-3 gap-4 sm:gap-5">
          {/* Email */}
          <a
            href="mailto:harshupatkar12@gmail.com"
            className="group bg-[#111] border border-[#222] rounded-2xl p-5 sm:p-6 hover:border-[#00ff87]/50 transition-all duration-300"
          >
            <p className="text-[#00ff87] text-xs uppercase tracking-[2px] mb-3">
              Email
            </p>

            <p className="text-gray-200 text-sm sm:text-base break-all group-hover:text-[#00ff87] transition">
              harshupatkar12@gmail.com
            </p>
          </a>

          {/* Location */}
          <div className="bg-[#111] border border-[#222] rounded-2xl p-5 sm:p-6">
            <p className="text-[#00ff87] text-xs uppercase tracking-[2px] mb-3">
              Location
            </p>

            <p className="text-gray-200 text-sm sm:text-base">
              Jabalpur, India
            </p>
          </div>

          {/* Availability */}
          <div className="bg-[#111] border border-[#222] rounded-2xl p-5 sm:p-6">
            <p className="text-[#00ff87] text-xs uppercase tracking-[2px] mb-3">
              Availability
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />

              <p className="text-gray-200 text-sm sm:text-base">
                Open to Opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-[#222] bg-[#111] text-gray-300 text-sm hover:border-[#00ff87] hover:text-[#00ff87] transition-all"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-[#222] bg-[#111] text-gray-300 text-sm hover:border-[#00ff87] hover:text-[#00ff87] transition-all"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:harshupatkar12@gmail.com"
            className="px-5 py-3 border border-[#222] bg-[#111] text-gray-300 text-sm hover:border-[#00ff87] hover:text-[#00ff87] transition-all"
          >
            Email ↗
          </a>
        </div>

        {/* Divider */}
        <div className="my-16 sm:my-20 h-px bg-[#222]" />

        {/* Form */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          {/* Form Heading */}
          <div>
            <p className="text-[#00ff87] uppercase tracking-[3px] text-xs sm:text-sm mb-4">
              Start a conversation
            </p>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              HAVE SOMETHING
              <br />
              IN MIND?
            </h3>

            <p className="mt-5 text-gray-500 text-sm sm:text-base leading-7 max-w-md">
              Fill out the form and send me a message. I&apos;ll get back to
              you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-4 sm:gap-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              autoComplete="name"
              required
              className="
                w-full
                bg-[#111]
                border border-[#222]
                rounded-xl
                px-5 sm:px-6
                py-4 sm:py-5
                text-white
                placeholder:text-gray-600
                outline-none
                relative
                z-10
                pointer-events-auto
                touch-action:manipulation
                focus:border-[#00ff87]
                transition
              "
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              autoComplete="email"
              required
              className="
                w-full
                bg-[#111]
                border border-[#222]
                rounded-xl
                px-5 sm:px-6
                py-4 sm:py-5
                text-white
                placeholder:text-gray-600
                outline-none
                relative
                z-10
                pointer-events-auto
                touch-action:manipulation
                focus:border-[#00ff87]
                transition
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="7"
              className="
                w-full
                bg-[#111]
                border border-[#222]
                rounded-xl
                px-5 sm:px-6
                py-4 sm:py-5
                text-white
                placeholder:text-gray-600
                outline-none
                resize-y
                relative
                z-10
                pointer-events-auto
                touch-action:manipulation
                focus:border-[#00ff87]
                transition
              "
            />

            <button
              type="submit"
              disabled={sending}
              className="
                w-full
                sm:w-fit
                min-w-[200px]
                bg-[#00ff87]
                text-black
                px-8
                py-4
                font-bold
                rounded-xl
                hover:scale-[1.02]
                active:scale-[0.98]
                transition-all
                duration-300
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {sending ? "SENDING..." : "SEND MESSAGE →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

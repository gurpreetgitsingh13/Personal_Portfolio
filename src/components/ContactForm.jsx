import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

      <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Subject"
          className="md:col-span-2 p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="md:col-span-2 p-3 rounded bg-gray-800 text-white"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 bg-pink-600 hover:bg-pink-700 py-3 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xldnodgo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset(); // optional: clear fields immediately
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form error:", error);
        alert("There was an error. Please try again later.");
      });
  };

  const handleReset = () => setSubmitted(false);

  return (
    <section id="contact" className="bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="md:col-span-2 p-3 rounded bg-gray-800 text-white"
            required
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="md:col-span-2 p-3 rounded bg-gray-800 text-white resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-red-600 hover:bg-black py-3 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-center space-y-6">
          <p className="text-xl text-green-400 font-medium">
            Your message has been sent successfully, I'll reach back ASAP(rocky) !!!
          </p>
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-black py-3 px-6 rounded text-white font-semibold"
          >
            Send Another Message
          </button>
        </div>
      )}
    </section>
  );
};

export default ContactForm;

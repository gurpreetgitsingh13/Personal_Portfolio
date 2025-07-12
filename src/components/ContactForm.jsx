import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formValues.subject.length > 120) {
      newErrors.subject = "Subject must be under 120 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    fetch("https://formspree.io/f/xldnodgo", {
      method: "POST",
      body: new FormData(e.target),
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setFormValues({ name: "", email: "", subject: "", message: "" });
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("There was an error. Please try again later.");
      });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormValues({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const isFormValid =
    formValues.name &&
    formValues.email &&
    formValues.subject &&
    formValues.message &&
    Object.keys(validate()).length === 0;

  return (
    <section id="contact" className="bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

      <div className="flex justify-center items-start gap-6 max-w-7xl mx-auto">
        {/* Left Icons */}
        <div className="flex flex-col gap-6 pt-6">
          <a
            href="mailto:gurpreetgitsingh@gmail.com"
            className="bg-red-600 p-4 rounded-full shadow-lg animate__animated animate__infinite animate__vibrate"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-white text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/gurpreetgitsingh"
            className="bg-red-600 p-4 rounded-full shadow-lg animate__animated animate__infinite animate__vibrate"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white"
                required
              />

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white w-full"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (max 120 characters)"
                  value={formValues.subject}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 text-white w-full"
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
                className="md:col-span-2 p-3 rounded bg-gray-800 text-white resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`md:col-span-2 py-3 rounded text-white font-semibold ${
                  isFormValid
                    ? "bg-red-600 hover:bg-black"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {isFormValid ? "Send Message" : "Locked 🔒"}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <p className="text-xl text-green-400 font-medium">
                Your message has been sent successfully! I'll reach back ASAP.
              </p>
              <button
                onClick={handleReset}
                className="bg-red-600 hover:bg-black py-3 px-6 rounded text-white font-semibold"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex flex-col gap-6 pt-6">
          <a
            href="https://github.com/gurpreetgitsingh13"
            className="bg-red-600 p-4 rounded-full shadow-lg animate__animated animate__infinite animate__vibrate"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
          <a
            href="https://x.com/godblessgarry"
            className="bg-red-600 p-4 rounded-full shadow-lg animate__animated animate__infinite animate__vibrate"
            title="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

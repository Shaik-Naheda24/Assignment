import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [formMessageColor, setFormMessageColor] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      setFormMessage("All fields are required!");
      setFormMessageColor("red");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      setFormMessage("Please enter a valid email!");
      setFormMessageColor("red");
      return;
    }

    // Success message
    setFormMessage("Thank you for your message!");
    setFormMessageColor("green");

    // Clear form (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-10 p-6 bg-neutral-800 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm mb-2 text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2 text-white">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm mb-2 text-white">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
        {formMessage && (
          <p
            className="mt-4 text-center font-semibold"
            style={{ color: formMessageColor }}
          >
            {formMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;

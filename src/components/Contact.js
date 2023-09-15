import React, { useState } from 'react';
// import Spline from "@splinetool/react-spline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form Data:', formData);
  };

  return (
    <div id='contact' style={{
      // Set the background image
      backgroundImage: "url('/assets/38126.jpg')", // Replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Social Links */}
      <div className="mr-8">
        <div className="relative bg-black text-white py-2 px-4 rounded border-teal-500 hover:border-opacity-50 border-2 shadow-lg hover:shadow-md hover:bg-teal-800 hover:text-teal-500 focus:outline-none focus:bg-gray-600 focus:border-opacity-50 focus:shadow-md focus:text-teal-500 mb-2">
          <i className="fab fa-github text-teal-500 mr-2"></i>
          GitHub
        </div>
        <div className="relative bg-black text-white py-2 px-4 rounded border-teal-500 hover:border-opacity-50 border-2 shadow-lg hover:shadow-md hover:bg-teal-800 hover:text-teal-500 focus:outline-none focus:bg-blue-500 focus:border-opacity-50 focus:shadow-md focus:text-teal-500 mb-2">
          <i className="fab fa-linkedin text-teal-500 mr-2"></i>
          LinkedIn
        </div>
        <div className="relative bg-black text-white py-2 px-4 rounded border-teal-500 hover:border-opacity-50 border-2 shadow-lg hover:shadow-md hover:bg-pink-800 hover:text-teal-500 focus:outline-none focus:border-opacity-50 focus:shadow-md focus:text-teal-500">
          <i className="fab fa-instagram text-teal-500 mr-2"></i>
          Instagram
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-teal-800 p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl text-white font-semibold mb-4">Get in touch</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

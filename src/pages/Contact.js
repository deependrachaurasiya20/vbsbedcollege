import React from "react";
import Navbar from "../components/Navbar"; // Adjust path if needed
import Footer from "../components/Footer"; // Adjust path if needed
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Optional: Install react-icons

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-8">Contact Us</h1>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-indigo-600" />
                  <div>
                    <p>📞 +91 8299553534</p>
                    <p>📞 +91 7905100533</p>
                    <p>📞 +91 9935560001</p>
                    <p>📞 +91 8853732983</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600" />
                  <p className="truncate sm:text-base">✉️ veerbahadursingheducationalgroup@gmail.com</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Follow Us</h2>
                  <div className="flex gap-6 text-xl text-gray-700">
                    <a href="https://www.facebook.com/profile.php?id=61575015958200" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      <FaFacebookF />
                    </a>
                    <a href="https://x.com/colleges43500" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                      <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/veerb_ahadursingh1996/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h2>
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  title="Veer Bahadur Singh College Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.169289445106!2d83.2375898!3d26.6146015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39911548a4a812eb%3A0x81afe028600ed37f!2sVeer%20Bahadur%20Singh%20B.Ed%20%26%20BTC%20College!5e0!3m2!1sen!2sin!4v1712742112345!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg hover:bg-indigo-800 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

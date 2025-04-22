import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="relative">
          <img
            src="/assets/logo.jpg"
            alt="College Logo"
            className="h-auto w-24 rounded-full object-cover shadow-md border border-gray-300"
          />
          <p className="text-sm mt-2">
            Veer Bahadur Singh B.Ed College is dedicated to academic excellence and shaping the future of students with a focus on innovation, inclusivity, and integrity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/faculty" className="hover:text-white">Faculty</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/career" className="hover:text-white">Career / Jobs</a></li>
            <li><a href="/exam" className="hover:text-white">Exam</a></li>
            <li><a href="/notice" className="hover:text-white">Notice</a></li>
            <li><a href="/recognition" className="hover:text-white">Recognition</a></li>
          
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Contact Us</h2>
          <p className="text-sm">📍 Harnahi, Uttar Pradesh, India</p>
          <p className="text-sm mt-1">📞 +91 8299553534</p>
          <p className="text-sm">✉️ veerbahadursingheducationalgroup@gmail.com</p>
          <div className="flex gap-4 mt-3">
            <a href="https://www.facebook.com/profile.php?id=61575015958200" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://x.com/colleges43500" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            <a href="https://www.instagram.com/veerb_ahadursingh1996/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>

          {/* Google Map */}
          <div className="mt-4">
            <h3 className="text-white font-semibold mb-2">Our Location</h3>
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-md shadow-md">
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

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Subscribe</h2>
          <p className="text-sm mb-2">Stay updated with our latest news and events.</p>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-gray-900" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 Veer Bahadur Singh B.Ed College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

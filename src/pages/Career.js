import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react"; // Optional: Install lucide-react for icons

const jobListings = [
  // {
  //   title: "Assistant Professor - English",
  //   deadline: "April 30, 2025",
  //   link: "https://docs.google.com/forms/d/e/1FAIpQLSdg0eFrMdeJBxxnrKYMJqq_l9g5mRqkgxpVqfyWuzdoVUaV6g/viewform?usp=header",
  // },
 
];

const Career = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-400 animate-gradient-x p-8 text-center text-gray-800">
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Career Opportunities at Veer Bahadur Singh B.Ed College
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Join our dedicated team and make a difference in the educational sector. Explore the exciting career opportunities we offer.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 text-gray-900 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-full text-white shadow-lg">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-semibold mb-3 text-indigo-700">{job.title}</h2>
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-5">
                <CalendarDays className="w-5 h-5" />
                <span className="font-medium">Apply by: <span className="font-bold text-red-500">{job.deadline}</span></span>
              </div>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-transform"
              >
                Apply Now 🚀
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Career;

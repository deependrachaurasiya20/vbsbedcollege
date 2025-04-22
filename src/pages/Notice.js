import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const notices = [
  {
    title: "📢 Admission Open for 2025",
    description: "Admissions for B.Ed programs are open. Last date to apply is 15th July 2025.",
    date: "05 April 2025"
  },
  
  {
    title: "📄 Scholarship Form Submission",
    description: "Last date for scholarship form submission is 10th May 2025.",
    date: "01 April 2025"
  },
];

const Notice = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300">
      <Navbar />

      <main className="flex-grow p-6 md:p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 text-red-600 tracking-wide animate__animated animate__fadeIn">
          Latest Notices 📌
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-gradient-to-r from-yellow-200 via-pink-200 to-indigo-200 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all border-l-4 border-purple-500 transform hover:scale-105"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-2xl sm:text-2xl font-semibold text-blue-900 hover:text-indigo-700 transition-all mb-2 sm:mb-0">
                  {notice.title}
                </h2>
                <span className="text-sm text-gray-500 italic bg-purple-200 px-4 py-2 rounded-full shadow-lg">
                  {notice.date}
                </span>
              </div>
              <p className="mt-3 text-lg text-gray-800 leading-relaxed">{notice.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notice;

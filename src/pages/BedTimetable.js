import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const BedTimetable = () => {
  const timetable = [
    // {
    //   date: "2025-05-10",
    //   time: "10:00 AM - 1:00 PM",
    //   subject: "Philosophical & Sociological Perspectives of Education (B.Ed 1st Year)",
    // },
    // {
    //   date: "2025-05-12",
    //   time: "10:00 AM - 1:00 PM",
    //   subject: "Psychology of Learning & Development (B.Ed 1st Year)",
    // },
    // {
    //   date: "2025-05-14",
    //   time: "10:00 AM - 1:00 PM",
    //   subject: "Pedagogy of English (B.Ed 2nd Year)",
    // },
    // {
    //   date: "2025-05-16",
    //   time: "10:00 AM - 1:00 PM",
    //   subject: "Contemporary India & Education (B.Ed 2nd Year)",
    // },
  ];

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 py-10 px-4">
        <motion.h1
          className="text-5xl font-extrabold text-center text-indigo-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📅 B.Ed Exam Timetable 2025
        </motion.h1>

        <motion.div
          className="overflow-x-auto max-w-full sm:max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-indigo-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-indigo-600 text-white text-sm sm:text-lg">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left">📆 Date</th>
                <th className="px-4 sm:px-6 py-4 text-left">⏰ Time</th>
                <th className="px-4 sm:px-6 py-4 text-left">📚 Subject</th>
              </tr>
            </thead>
            <tbody className="text-indigo-900 font-medium">
              {timetable.map((entry, index) => (
                <tr
                  key={index}
                  className="hover:bg-indigo-50 transition duration-300"
                >
                  <td className="px-4 sm:px-6 py-4 border-t text-sm sm:text-base">
                    {entry.date} {/* Directly using the string */}
                  </td>
                  <td className="px-4 sm:px-6 py-4 border-t text-sm sm:text-base">{entry.time}</td>
                  <td className="px-4 sm:px-6 py-4 border-t text-sm sm:text-base">{entry.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BedTimetable;

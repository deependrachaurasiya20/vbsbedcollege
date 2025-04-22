// src/pages/Exam.js

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

const Exam = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar />
      <main className="p-4 md:p-6 min-h-screen bg-gradient-to-r from-indigo-50 via-white to-rose-100">
        <h1 className="text-4xl text-center font-bold mb-10 text-blue-800">Examinations</h1>

        {/* Timetable Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">📅 Exam Timetable</h2>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-gray-700">View B.Ed Examination Timetable:</p>
              <button
                onClick={() => handleNavigate("/timetable/bed")}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center gap-2"
              >
                <FileText size={18} />
                B.Ed Timetable
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Exams */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-yellow-100 to-rose-100 shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-rose-800">📝 Upcoming Exams</h2>
            <ul className="space-y-2 list-disc pl-6 text-gray-800">
              <li>B.Ed 1st Year</li>
              <li>B.Ed 2nd Year</li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-green-100 to-emerald-50 shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">📄 Exam Results</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-green-700">
                <FileText size={18} />
                <a href="/results/bed2024.pdf" target="_blank" className="underline">B.Ed 2024 Results</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Exam Centers */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md rounded-xl p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">🏫 Exam Centers</h2>
            <table className="min-w-full border border-gray-300 bg-white">
              <thead className="bg-indigo-200">
                <tr>
                  <th className="p-2 border">Center Name</th>
                  <th className="p-2 border">Location</th>
                  <th className="p-2 border">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Main Campus Hall</td>
                  <td className="p-2 border">Veer Bahadur Singh B.Ed College, Main Building</td>
                  <td className="p-2 border">+91-9793202963</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Instructions */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-lime-100 to-green-50 shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-lime-800">📢 Exam Rules & Instructions</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Reach the exam center at least 30 minutes early.</li>
              <li>Carry valid ID and admit card. No entry without it.</li>
              <li>Strictly avoid any unfair means during exams.</li>
              <li>Use only black/blue pen unless stated otherwise.</li>
              <li>No mobile phones, smartwatches, or calculators allowed.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-sky-100 to-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-sky-800">📞 Contact Examination Cell</h2>
            <p className="mb-1 text-gray-800">Exam Controller: <strong>Shri Narayan Tripathi</strong></p>
            <p className="mb-1 text-gray-800 flex flex-wrap gap-2">
              Email:
              <a
                href="mailto:veerbahadursinghpg@gmail.com"
                className="underline text-blue-600"
              >
                veerbahadursinghpg@gmail.com
              </a>
            </p>
            <p className="text-gray-800">Phone: +91-9793202963</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Exam;
